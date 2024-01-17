<script setup>
console.log("init in card content");
const animals = ref([
  { id: 1, name: "cat" },
  { id: 2, name: "dog" },
  { id: 3, name: "pig" },
]);
</script>

<template>
  <v-card variant="outlined" class="pa-3">
    <section>
      <h1 class="text-4xl"><slot /></h1>

      <slot name="description" />

      <ul>
        <li v-for="animal in animals" :key="animal.id"> {{ animal.name}}</li>
      </ul>
    </section>
  </v-card>
</template>