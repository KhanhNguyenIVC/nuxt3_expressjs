export default defineNuxtPlugin((nuxtApp) => {
    console.log('hello from Hello plugins || is server side: ', process.server);
    nuxtApp.hook('app:created', () => {
        const header = useRequestHeaders(['cookie'])
        console.log('app:created in nuxtApp hook || all cookie:', header, ' || is server side: ', process.server)
    })

    nuxtApp.hook('page:finish', () => {
        console.log('page:finish in nuxtApp hook || is server side: ', process.server);
    })
})