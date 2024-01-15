<script setup>
// First way : Use a static import for server-side compatibility
// import '~/assets/mycustom.css'

// SeCaution: Dynamic imports are not server-side compatible
// import('~/assets/mycustom.css')

useHead({
  title: "About",
});
</script>

<template>
  <div>
    <p class="txt-about">This page will be displayed at the /about route.</p>
    <p class="txt-custom">Text</p>
    <p class="txt-main-custom">Text from main css</p>
    <img src="/img/nuxt3.png" alt="Discover Nuxt 3" /><br>
    <NuxtLink to="/">Back to home</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import url('~/assets/css/mycustom.css');

.txt-about {
  color: $secondary;
}
</style>