<script setup>
import TSXComponent from "~/components/TSXComponent";
</script>

<template>
    <div>
        Component
        <Hello/>

        <hr>
        NuxtIsland
        <NuxtIsland name="Hello" />

        <!-- <hr>
        Hello2 component
        <Hello2/> -->

        <hr>
        TSX
        <ClientOnly>
        <TSXComponent message="pros_tsx" />
        </ClientOnly>
    </div>
</template>