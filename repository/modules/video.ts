import { useCustomFetch } from "../../composables/customFetch"

class VideosModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl + '/videos'

    async getAllVideos() {
        return await useCustomFetch('GET', this.BASE_URL)
    }

    async getVideoDetail(id: string) {
        return await useCustomFetch("GET", `${this.BASE_URL}/${id}`)
    }

    async add(data: object) {
        return await useCustomFetch("POST", this.BASE_URL, data)
    }

    async edit(data: object) {
        return await useCustomFetch("PUT", this.BASE_URL, data)
    }

    async deleteVideo(data: object) {
        console.log('delete', data);
        return await useCustomFetch("DELETE", this.BASE_URL, data)
    }

    async getVideoSource(id: string) {
        return await useCustomFetch("GET", `${this.BASE_URL}/clip/${id}`)
    }
}

export default VideosModule;