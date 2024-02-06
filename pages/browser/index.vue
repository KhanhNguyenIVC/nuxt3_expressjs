<script setup>
import {
  pausableWatch,
  useBluetooth,
  useBroadcastChannel,
  useBrowserLocation,
  useClipboard,
  useCssVar,
} from "@vueuse/core";

const { isSupported, isConnected, device, requestDevice, server, error } =
  useBluetooth({
    acceptAllDevices: true,
    optionalServices: ["battery_service"],
  });

const batteryPercent = ref(null);

const isGettingBatteryLevels = ref(false);

async function getBatteryLevels() {
  isGettingBatteryLevels.value = true;

  // Get the battery service:
  const batteryService = await server.getPrimaryService("battery_service");

  // Get the current battery level
  const batteryLevelCharacteristic = await batteryService.getCharacteristic(
    "battery_level"
  );

  // Listen to when characteristic value changes on `characteristicvaluechanged` event:
  batteryLevelCharacteristic.addEventListener(
    "characteristicvaluechanged",
    (event) => {
      batteryPercent.value = event.target.value.getUint8(0);
    }
  );

  // Convert received buffer to number:
  const batteryLevel = await batteryLevelCharacteristic.readValue();

  batteryPercent.value = await batteryLevel.getUint8(0);
}

const { stop } = pausableWatch(isConnected, (newIsConnected) => {
  if (!newIsConnected || !server.value || isGettingBatteryLevels.value) return;
  // Attempt to get the battery levels of the device:
  getBatteryLevels();
  // We only want to run this on the initial connection, as we will use an event listener to handle updates:
  stop();
});

/**
 * Broadcast Channel
 */
const broadCastChannel = ref([]);
const message = ref("");
const {
  isSupported: isSupportedBroadcast,
  channel,
  post,
  close,
  error: errorBroadcast,
  isClosed,
} = useBroadcastChannel({ name: "vueuse-demo-channel" });

const postBroadcast = () => {
  post(message.value);
  // close()
};

const received = ref("");
const channelReceiver = new BroadcastChannel("vueuse-demo-channel");
channelReceiver.addEventListener("message", (event) => {
  broadCastChannel.value.push(event.data);
  received.value = event.data;
});

const location = useBrowserLocation();

const txtCopy = ref("");
const {
  text,
  copy,
  copied,
  isSupported: isSupportedClipboard,
} = useClipboard({ txtCopy });

const someEl = ref(null)
const color2 = useCssVar('--color', someEl, { initialValue: '#eee' })
</script>

<template>
  <div>
    <v-btn variant="tonal" @click="requestDevice"
      >Request Bluetooth device</v-btn
    ><br />
    <span>isSupported: {{ isSupported }}</span
    ><br />
    <span>isConnected: {{ isConnected }}</span
    ><br />
    <span>device:</span>
    <pre>{{ device }}</pre>
    ><br />
    <span>server: {{ server }}</span
    ><br />
    <span>error: {{ error }}</span
    ><br />

    <hr />
    <h3>useBroadcastChannel</h3>
    <span>Please open this page in at least two tabs</span><br />
    <span>isSupported: {{ isSupportedBroadcast }}</span
    ><br />
    <span>error: {{ errorBroadcast }}</span>
    <v-text-field v-model="message" label="Type something..."></v-text-field>
    <v-btn variant="tonal" @click="postBroadcast">Post</v-btn>
    <span>received: {{ received }}</span>
    <pre>
      {{ broadCastChannel }}
    </pre>

    <!-- <hr>
    <h3>useBrowserLocation</h3>
    <pre>{{ location }}</pre> -->

    <hr />
    <h3>useClipboard</h3>
    <div>
      <div v-if="isSupportedClipboard">
        <v-text-field v-model="txtCopy" label="Type text to copy">
        </v-text-field>
        <v-btn @click="copy(txtCopy)">
          <!-- by default, `copied` will be reset in 1.5s -->
          <span v-if="!copied">Copy</span>
          <span v-else>Copied!</span>
        </v-btn>
        <p>
          Current copied: <code>{{ text || "none" }}</code>
        </p>
      </div>
      <p v-else>Your browser does not support Clipboard API</p>
    </div>

    <hr />
    <h3>useCssVar</h3>
    <!-- <span >sample text</span> {{ color1 }} -->
  </div>
</template>
