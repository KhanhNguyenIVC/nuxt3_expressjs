
class VideosModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl
    private RESOURCE = '/videos'

    async getAllVideos() {
        return await useAsyncData(() => 
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'GET'
            })
        )
    }

    async getVideoDetail(id: string) {
        return await useAsyncData(() => 
            $fetch(`${this.BASE_URL}${this.RESOURCE}/${id}`, {
                method: 'GET'
            })
        )
    }

    async add(data: object) {
        return await useAsyncData(() => 
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'POST',
                body: data
            })
        )
    }

    async edit(data: object) {
        return await useAsyncData(() => 
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'PUT',
                body: data
            })
        )
    }

    async deleteVideo(id: object) {
        return await useAsyncData(() => 
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'DELETE',
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