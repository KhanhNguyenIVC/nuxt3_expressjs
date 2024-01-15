<script setup>
const { data } = await useFetch('/api/hello')

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
        Server papge
        <pre>
            {{ data }}
        </pre>

        <button @click="clearData">Clear</button>
        <button @click="refreshData">Refresh</button>
    </div>
</template>