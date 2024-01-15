<script setup>
    const route = useRoute()
</script>

<template>
    <div>
        <h3>Post page</h3>
        <p>ID: {{ route.params.id }}</p>
    </div>
</template>