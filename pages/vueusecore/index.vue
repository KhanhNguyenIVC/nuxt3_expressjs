<script setup>
import { OnClickOutside } from "@vueuse/components";
import { useGlobalState } from "@/stores/globalState";
import {
  useDebouncedRefHistory,
  useLastChanged,
  useStorage,
  useActiveElement,
} from "@vueuse/core";

const { $api } = useNuxtApp();

// tracks mouse position
const { x, y } = useMouse();

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
  // localStorage.setItem('my-store', '{"hello": "hello"}')
  console.log("useLocalStorage", localStorage.getItem("my-storage"));
  console.log("useStorage", localStorage.getItem("my-store"));
});

const activeElement = useActiveElement();

watch(
  txtLastChange,
  (to, from) => {
    console.log("tracking everything is changed here", '|| old value: ', from, '|| new value: ', to);
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div>
    <ClientOnly>
      <div>pos: {{ x }} - {{ y }}</div>
      <OnClickOutside
        style="background-color: aqua; width: 160px; height: 90px"
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
    </ClientOnly>
  </div>
</template>