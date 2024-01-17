export default defineNuxtPlugin((nuxtApp) => {
    console.log('hello from Hello plugins');
    nuxtApp.hook('app:created', () => {
        console.log('app:created in nuxtApp hook')
    })

    nuxtApp.hook('page:finish', () => {
        console.log('page:finish in nuxtApp hook');
    })
})