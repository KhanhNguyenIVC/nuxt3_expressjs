<script setup>
const descriptionMeta = ref("My amazing site2");

useHead({
  // titleTemplate: '%s - Nuxt3',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt 3` : "Nuxt 3";
  },
  meta: [{ name: "first_description", content: "My amazing site1" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('init app page')" }],
});

// useSeoMeta({
//   title: "My Amazing Site",
//   ogTitle: "My Amazing Site",
//   description: "This is my amazing site, let me tell you all about it.",
//   ogDescription: "This is my amazing site, let me tell you all about it.",
//   ogImage: "https://picsum.photos/200",
//   twitterCard: "summary_large_image",
// });
</script>

<template>
  <!-- Components SEO -->
  <Meta name="second_description" :content="descriptionMeta"></Meta>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>