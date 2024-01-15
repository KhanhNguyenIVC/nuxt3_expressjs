<script setup>
definePageMeta({
  middleware: "dashboard",
});

const isLogin = useCookie('isLogin')
console.log('get cookie isLogin', isLogin.value);

let { data: dataFetch } = await useFetch(
  "https://jsonplaceholder.typicode.com/todos/1"
);

const { data: asyncData } = await useAsyncData("GET", () =>
  $fetch("https://jsonplaceholder.typicode.com/todos/2", {
    params: {
      // id: 1
    },
  })
);

const { data: lazyData, pending } = await useLazyAsyncData("POST", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts")
);

const refreshData = async () => {
  console.log("handle refresh");
  try {
    await refreshNuxtData();
  } finally {
    console.log("refresh has done");
  }
};

const clearData = async () => {
  console.log('handle clear');
  try {
    await clearNuxtData ()
  } finally {
    console.log("clear has done");
  }
}
</script>

<template>
  <div>
    <h1>Welcome to your dashboard</h1>
    <Suspense>
      <div>
        <div>
          <h3>Get data by useFetch</h3>
          <p>ID: {{ dataFetch ? dataFetch.id : null }}</p>
          <p>Title: {{ dataFetch ? dataFetch.title : null }}</p>
        </div>

        <div>
          <h3>Get data by useAsyncData</h3>
          <p>ID: {{ asyncData ? asyncData.id : null }}</p>
          <p>Title: {{ asyncData ? asyncData.title : null }}</p>
        </div>

        <div>
          <h3>Get data by useLazyAsyncData</h3>
          <div v-if="pending"><h1>Loading lazy....</h1></div>
          <div v-else>
            <ul>
              <li v-for="lazyDataItem in lazyData" :key="lazyDataItem.id">
                {{ lazyDataItem.id }} - {{ lazyDataItem.title }}
              </li>
            </ul>
          </div>
          <button @click="refreshData">refreshAllData</button>
          <button @click="clearData">clearAllData</button>
        </div>
      </div>

      <!-- loading state -->
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped>
</style>