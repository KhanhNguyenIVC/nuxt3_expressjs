<script setup>
console.log('init vue use core');

const { x, y } = useMouse()

</script>

<template>
    <div>
        pos: {{ x }}, {{ y }}
    </div>
</template>