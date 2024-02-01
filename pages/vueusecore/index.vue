<script setup>
import { OnClickOutside, UseDraggable } from "@vueuse/components";
import { useGlobalState } from "@/stores/globalState";
import {
  useDebouncedRefHistory,
  useLastChanged,
  useStorage,
  useDraggable,
  useSessionStorage,
  useDropZone,
  useElementBounding,
  useIntersectionObserver,
} from "@vueuse/core";

const snackBarText = ref("");
const snackbar = ref(false);

const { $api } = useNuxtApp();

// tracks mouse position
const { x: xPos, y: yPos } = useMouse();

// persist state in localStorage
const store = useLocalStorage("my-storage", {
  name: "Apple",
  color: "red",
});
// bind object
const state = useStorage("my-store", { hello: "hi", greeting: "Hello" });

useEventListener("mousemove", () => {
  console.log("cleanup mousemove");
});

const clickOutside = () => {
  console.log("clicked outside");
};

const globalState = useGlobalState(1);
const increment = () => {
  globalState.increment();
};
const reset = () => {
  globalState.reset();
};

const { data: videos } = await $api.videos.getAllVideos();
const sdata = useCustomVueCoreFetch();
console.log("fetched", sdata);

const employees = ref({
  firstname: "",
  lastname: "",
  email: "",
});
const { undo: undoForm, redo: redoForm } = useDebouncedRefHistory(employees, {
  deep: true,
  debounce: 1000,
});

const txtLastChange = ref("");
const lastChange = useLastChanged(txtLastChange, { flush: "sync" });
console.log("lastchange", lastChange);

onMounted(() => {
  console.log("mounted hook");
  console.log("useLocalStorage", localStorage.getItem("my-storage"));
  console.log("useStorage", localStorage.getItem("my-store"));
});

const txtKeySession = ref("");
const txtValueSession = ref("");
const setSession = () => {
  useSessionStorage(txtKeySession.value, txtValueSession.value);
  txtKeySession.value = "";
  txtValueSession.value = "";
  snackBarText.value = "Add session handling success";
  snackbar.value = true;
};

function clearSession() {
  window.sessionStorage.clear();
  snackBarText.value = "Destroy session handling success";
  snackbar.value = true;
}

const dropZoneRef = ref(null);
const fileUploads = ref();
function onDrop(files) {
  console.log("uploaded", files);
  fileUploads.value = files;
}
function getScrImg(file) {
  if (file) {
    return URL.createObjectURL(file);
  }
}
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ["image/png"],
});

const elBounding = ref(null);
const {
  x: xBounding,
  y: yBounding,
  top: topBounding,
  right: rightBounding,
  bottom: bottomBounding,
  left: leftBounding,
  width: widthBounding,
  height: heightBounding,
} = useElementBounding(elBounding);

const target = ref(null);
const targetIsVisible = ref(false);
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
  }
);

watch(
  txtLastChange,
  (to, from) => {
    console.log(
      "tracking everything is changed here",
      "|| old value: ",
      from,
      "|| new value: ",
      to
    );
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div>
    <ClientOnly>
      <div>pos: {{ xPos }} - {{ yPos }}</div>
      <OnClickOutside
        style="
          background-color: #00ffff;
          width: 160px;
          height: 50px;
          border-radius: 5px;
        "
        @trigger="clickOutside"
      >
        <div>Click outside of here</div>
      </OnClickOutside>

      <hr />
      <h3>createGlobalState</h3>
      <p>globalState: {{ globalState.countGlobal }}</p>
      <p>doubleGlobalState: {{ globalState.doubleCountGlobal }}</p>
      <v-btn variant="tonal" @click="increment">Increment</v-btn>
      <v-btn variant="tonal" @click="reset">reset</v-btn>

      <hr />
      <h3>useDebouncdRefhistory</h3>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="employees.firstname"
                label="First name"
                required
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="employees.lastname"
                label="Last name"
                hide-details
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="employees.email"
                label="E-mail"
                hide-details
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-btn class="me-1" variant="tonal" @click="undoForm">UndoForm</v-btn>
      <v-btn variant="tonal" @click="redoForm">RedoForm</v-btn>

      <hr />
      <h3>useLastChanged</h3>
      <v-text-field
        v-model="txtLastChange"
        label="Type something"
      ></v-text-field>
      <p>{{ lastChange === null ? "" : new Date(lastChange) }}</p>

      <hr />
      <h3>useSessionStorage</h3>
      <v-text-field v-model="txtKeySession" label="Type key session" />
      <v-text-field v-model="txtValueSession" label="Type value session" />
      <v-btn variant="tonal" @click="setSession">Set session</v-btn>
      <v-btn variant="tonal" @click="clearSession">Clear session</v-btn>

      <hr />
      <UseDraggable
        v-slot="{ x, y }"
        :initial-value="{ x: 100, y: 100 }"
        storage-key="vueuse-draggable"
        storage-type="session"
        class="drag-item"
      >
        👋Drag me! I am at {{ x }}, {{ y }}
      </UseDraggable>

      <hr />
      <h3>DrogZone</h3>
      <p>isOverDropZone: {{ isOverDropZone }}</p>
      <div ref="dropZoneRef" class="drop-zone"><p>Drop files img(png)</p></div>
      <div id="areaRenderFile">
        <img
          class="img-drop"
          v-for="file in fileUploads"
          :key="file"
          :src="getScrImg(file)"
        />
      </div>

      <hr />
      <h3>useElementBounding</h3>
      <div
        ref="elBounding"
        style="
          background-color: #00ffff;
          height: 230px;
          width: 220px;
          border-radius: 5px;
        "
      >
        resize bounding:<br />
        x: {{ xBounding }}<br />
        y: {{ yBounding }}<br />
        top: {{ topBounding }}<br />
        right: {{ rightBounding }}<br />
        bottom: {{ bottomBounding }}<br />
        left: {{ leftBounding }}<br />
        width: {{ widthBounding }}<br />
        height: {{ heightBounding }}<br />
      </div>

      <hr />
      <h3>useIntersectionObserver</h3>
      <span>targetIsVisible: </span><span style="font-weight: bold;color: #00ffff;">{{ targetIsVisible }}</span>

      <div class="scroll-area">
        <span>Scroll me down</span>
        <div class="s-scroll-area">
          <div ref="target">
            <h1>Hello world</h1>
          </div>
        </div>
      </div>

      <v-snackbar v-model="snackbar">
        {{ snackBarText }}
        <template v-slot:actions>
          <v-btn color="pink" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </ClientOnly>
    <br /><br /><br /><br />
  </div>
</template>

<style lang="scss" scoped>
.drag-item {
  position: fixed;
  cursor: pointer;
  background-color: #00ffff;
  width: 300px;
  border-radius: 5px;
  padding: 10px;
}

.drop-zone {
  width: 150px;
  height: 150px;
  background: #00ffff;
  border-radius: 5px;
  text-align: center;
  p {
    padding-top: 50px;
  }
}

.img-drop {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

.scroll-area {
  height: 350px;
  width: 250px;
  background-color: aquamarine;
  overflow: scroll;
}

.s-scroll-area {
  height: 700px;
  width: 250px;
  padding-top: 350px;
}
</style>