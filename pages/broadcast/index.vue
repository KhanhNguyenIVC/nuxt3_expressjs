<script setup>
import { useBroadcastChannel } from "@vueuse/core";
const {
  isSupported: isSupportedBroadcast,
  channel,
  post,
  close,
  error: errorBroadcast,
  isClosed,
} = useBroadcastChannel({ name: "vueuse-broadcast-channel" });

// const form = ref(false);
const loading = ref(false);
const txtMessage = ref("");

const postBroadcast = () => {
  if (txtMessage.value === "") {
    required()
    return;
  } 
  loading.value = true
  post(txtMessage.value);
  loading.value = false
};

const broadCastMessages = ref([]);
const channelReceiver = new BroadcastChannel("vueuse-broadcast-channel");
channelReceiver.addEventListener("message", (event) => {
  var date = new Date();
  var hours = date.getHours().toString();
  var minutes = date.getMinutes().toString();
  var messageItem = {
    from: "Anonymous",
    message: event.data,
    time: hours + ":" + minutes,
    timeStamp: event.timeStamp,
    color: "green",
  };
  broadCastMessages.value.push(messageItem);
  txtMessage.value = "";
});

//** Validation required */
const required = (value) => {
  return !!value || "Field is required";
};
</script>
<!-- src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" -->
<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img height="200" cover class="text-white">
          <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
            <v-toolbar-title class="text-h6"> Messages </v-toolbar-title>
          </v-toolbar>

          <div style="background-color: gray; opacity: 0.9; padding: 10px">
            <v-text-field
              v-model="txtMessage"
              label="Type something..."
              clearable
              hint="Message will be anonymous"
              class="mb-1"
            ></v-text-field>
            <v-btn :loading="loading" variant="tonal" @click="postBroadcast"
              >Send</v-btn
            >
          </div>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Today</div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="message in broadCastMessages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>Anonymous</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
</style>