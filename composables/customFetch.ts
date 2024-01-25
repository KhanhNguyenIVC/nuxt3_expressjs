export const useCustomFetch = async (method: string, url: string, data? :object) => {
    const result = await useAsyncData(() => $fetch(url, {
        method: method,
        headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
        }),
        body: data
    }))

    return result;
}
