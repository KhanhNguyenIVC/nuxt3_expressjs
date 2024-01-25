<script setup>
const { $api } = useNuxtApp();

const { data: teams } = await $api.teams.getAll();
const { data: nuxtServer } = await useFetch('/api/hello')

const clearData = async () => {
  console.log("handle clear");
  try {
    await clearNuxtData();
  } finally {
    console.log("clear has done");
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

</script>

<template>
    <div>

        <h2>Get data from server nuxt</h2>
        <pre> {{ nuxtServer }}</pre>

        <h2>Get data from express</h2>
        <pre>
            {{ teams }}
        </pre>

        <v-btn @click="clearData">Clear</v-btn>
        <v-btn @click="refreshData">Refresh</v-btn>
        <br><br><br><br>
    </div>
</template>