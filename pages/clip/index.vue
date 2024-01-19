<script setup>
const { $api } = useNuxtApp();
const snackBarText = ref("Update success");
const snackbar = ref(false);
const isLoading = ref(false);
const videoSelected = ref({
  title: null,
  poster: null,
  duration: null,
});

const rules = ref([
  (value) => {
    if (value) return true;
    return "You must enter a value.";
  },
]);

const { data: videos } = await $api.videos.getAllVideos();
const srcVideo = ref("");

if (videoSelected.value.id != undefined) {
  console.log("inside here", srcVideo);
  srcVideo.value = await $api.videos.getVideoSource(videoSelected.value.id);
}

const onChange = async (event) => {
  const object = videos.value.find(
    (obj) => obj.id === parseInt(event.target.value)
  );
  videoSelected.value = object;
  srcVideo.value = `http://localhost:5000/videos/clip/${event.target.value}`;
};

function renewVideo() {
  videoSelected.value = ref({
    title: null,
    poster: null,
    duration: null,
  });
}

const add = async () => {
  isLoading.value = true;
  if (videoSelected.value.title == null) {
    return;
  }

  if (isLoading.value) {
    const { data: doAdd } = await $api.videos.add({
      title: videoSelected.value.title,
      poster: videoSelected.value.poster,
      duration: videoSelected.value.duration,
    });

    if (doAdd.value.status) {
      renewVideo();
      refreshData();
      snackBarText.value = "Add handling success";
      snackbar.value = true;
    } else {
      snackBarText.value = "Got an error while add handling";
      snackbar.value = true;
    }
    isLoading.value = false;
  }
};

const edit = async () => {
  const { data: doEdit } = await $api.videos.edit(videoSelected.value);

  if (doEdit.value.status) {
    snackBarText.value = "Edit handling success";
    snackbar.value = true;
  } else {
    snackBarText.value = "Got an error while edit handling";
    snackbar.value = true;
  }
};

const deleteVideo = async () => {
  const { data: doDelete } = await $api.videos.deleteVideo({
    id: videoSelected.value.id,
  });

  if (doDelete.value.status) {
    renewVideo();
    refreshData();
    snackBarText.value = "Delete handling success";
    snackbar.value = true;
  } else {
    snackBarText.value = "Got an error while delete handling";
    snackbar.value = true;
  }
};

const refreshData = async () => {
  console.log("handle refresh");
  try {
    await refreshNuxtData();
  } finally {
    console.log("refresh has done");
  }
};

const clearData = async () => {
  console.log("handle clear");
  try {
    await clearNuxtData();
  } finally {
    console.log("clear has done");
  }
};

const someErrorLogger = () => {
  console.log('inside boundary');
  snackBarText.value = "Got an error in nuxt error boundary";
  snackbar.value = true;
};
</script>

<template>
  <div>
    <NuxtErrorBoundary @error="someErrorLogger">
      <v-card class="mx-auto" width="1000" prepend-icon="mdi-home">
        <template v-slot:title> Videos </template>
        <v-container>
          <v-row>
            <v-col>
              <select
                class="video-combobox"
                @change="onChange($event)"
                v-model="videoSelected"
              >
                <option
                  v-for="video in videos"
                  :key="video.id"
                  :value="video.id"
                >
                  {{ video.title }}
                </option>
              </select>
            </v-col>
          </v-row>
          <video controls muted class="mt-1">
            <source :src="srcVideo" type="video/mp4" />
          </video>
        </v-container>

        <!-- <v-combobox
          label="Pick one"
          :items="videos"
          v-model="videoSelected"
          @change="onChange($event)"
        ></v-combobox> -->

        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="videoSelected.title"
                  :rules="rules"
                  label="Title"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="videoSelected.poster"
                  label="Poster"
                  hide-details
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="videoSelected.duration"
                  label="Duration"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="mt-2">
              <v-btn class="me-2" @click="add">Add</v-btn>
              <v-btn class="me-2" @click="edit">Edit</v-btn>
              <v-btn @click="deleteVideo">Delete</v-btn>
            </div>
          </v-container>
        </v-form>
        <hr />
        <v-col cols="auto">
          <v-btn class="me-2" @click="clearData">Clear</v-btn>
          <v-btn @click="refreshData">Refresh</v-btn>
        </v-col>
      </v-card>

      <template #error="{ error }">
        <p>An error occurred: {{ error }}</p>
      </template>
    </NuxtErrorBoundary>

    <v-snackbar v-model="snackbar">
      {{ snackBarText }}
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style lang="scss" scoped>
.video-combobox {
  font-size: 0.9rem;
  padding: 2px 5px;
  background: grey;
  color: white;
}
</style>