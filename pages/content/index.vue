<script setup>
useHead(() => ({
  script: [
    { src: "/js/webfont.js" },
    { src: "/js/snap.svg-min.js" },
    { src: "/js/underscore-min.js" },
    { src: "/js/sequence-diagram-min.js" },
  ],
}))

onMounted(() => {
  // Check more grammar sequence diagram at here
  // https://github.com/bramp/js-sequence-diagrams/blob/master/src/grammar.jison

  const diagram = Diagram.parse(
    document.getElementsByClassName("diagramTxt")[0].innerText
  );
  diagram.drawSVG("diagram", { theme: "simple" });
});
</script>

<template>
  <div>
    <h1>Nuxt Content</h1>

    <div id="diagram"></div>

    <ContentDoc>
      <template #not-found> <h3>Document not found</h3> </template>
    </ContentDoc>
  </div>
</template>