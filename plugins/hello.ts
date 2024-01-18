export default defineNuxtPlugin((nuxtApp) => {
    console.log('hello from Hello plugins || is server side: ', process.server);
    nuxtApp.hook('app:created', () => {
        console.log('app:created in nuxtApp hook || is server side: ', process.server)
    })

    nuxtApp.hook('page:finish', () => {
        console.log('page:finish in nuxtApp hook || is server side: ', process.server);
    })
})