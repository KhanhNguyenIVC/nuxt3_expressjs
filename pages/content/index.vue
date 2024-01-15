<script setup>
console.log("init content");
</script>

<template>
  <main>
    <div>
      <ContentDoc>
        <template #not-found>
          <span>Document not found</span>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>