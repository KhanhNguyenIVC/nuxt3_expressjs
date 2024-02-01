<script setup>
import { pausableWatch, useBluetooth } from "@vueuse/core";

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
</script>

<template>
  <div>
    <v-btn @click="requestDevice">Request Bluetooth device</v-btn><br />
    <span>isSupported: {{ isSupported }}</span
    ><br />
    <span>isConnected: {{ isConnected }}</span
    ><br />
    <span>device: {{ device }}</span
    ><br />
    <span>server: {{ server }}</span
    ><br />
    <span>error: {{ error }}</span
    ><br />
  </div>
</template>
