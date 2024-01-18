export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        // onNuxtReady only runs on the client-side.
        console.log('inside nuxtReady hook');
    })
})
