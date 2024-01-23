<script setup>
    console.log('unit testing');

    const myNumber = ref('3')
</script>

<template>
    <h3>Unit testing</h3>
    <span>{{ myNumber }}</span>
</template>