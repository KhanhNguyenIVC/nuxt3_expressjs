<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <h2>{{ error.statusCode }} - {{ error.statusMessage }}</h2>
    <v-btn @click="handleError">Go home page</v-btn>
  </div>
</template>
