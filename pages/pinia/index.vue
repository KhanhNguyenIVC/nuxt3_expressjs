<script setup>
import { useCartStore } from "@/stores/cart";
const cart = useCartStore();
console.log("init page pinia", cart);

const actionStore = () => {
  cart.increment();
};
</script>

<template>
  <div>
    <div>pinia</div>
    state count: {{ cart.count }} state name: {{ cart.name }}
    <br />
    getter double value {{ cart.doubleCount }}

    <v-btn @click="actionStore">Getter store</v-btn>

    <br />
    <br />
    <v-text-field
      label="pinia count"
      v-model="cart.count"
    ></v-text-field>

    <v-text-field
      label="pinia name"
      v-model="cart.name"
    ></v-text-field>

    <br />
    <NuxtLink to="/sdpinia">Second pinia</NuxtLink>
  </div>
</template>