export const useCustomFetch = (method: string, url: string, data? :object) => {
    return useAsyncData(() => $fetch(url, {
        method: method,
        headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
        }),
        body: data
    }))
}
