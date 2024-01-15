<script setup>
definePageMeta({
  layout: "login",
});

onMounted(() => {
  console.log('mounted event');
  document.cookie = 'isLogin=true'
})
</script>

<template>
  <div>
    <p>Login page</p>
    <p class="txt-about">This page will be displayed at the /login route.</p>
  </div>
</template>