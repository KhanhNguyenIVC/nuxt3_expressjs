<script setup>
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();
console.log("second pinia", cart);

const clearPinia = () => {
  cart.clear();
};
</script>

<template>
  <div>
    <div>second pinia</div>
    state count: {{ cart.count }} state name: {{ cart.name }}

    <br />
    <v-btn @click="clearPinia">Clear</v-btn>

    <br>
    <NuxtLink to="/pinia">Back to first pinia</NuxtLink>
  </div>
</template>