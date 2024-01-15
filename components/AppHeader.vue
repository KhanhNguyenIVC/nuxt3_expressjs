<script setup>
const drawer = ref(false);
const items = ref([
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);
</script>

<template>
  <div>
    <v-layout>
      <v-app-bar>
        <v-toolbar-title>Header</v-toolbar-title>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
    </v-layout>
    <br />
    <br />
    <br />
  </div>
</template>