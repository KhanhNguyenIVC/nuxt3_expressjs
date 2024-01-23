
class VideosModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl
    private RESOURCE = '/videos'

    async getAllVideos() {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'GET',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
            })
        )
    }

    async getVideoDetail(id: string) {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}/${id}`, {
                method: 'GET',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
            })
        )
    }

    async add(data: object) {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'POST',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
                body: data
            })
        )
    }

    async edit(data: object) {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'PUT',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
                body: data
            })
        )
    }

    async deleteVideo(id: object) {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'DELETE',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
                body: id
            })
        )
    }

    async getVideoSource(id: string) {
        return await useAsyncData("GET", () =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}/clip/${id}`)
        )
    }
}

export default VideosModule;