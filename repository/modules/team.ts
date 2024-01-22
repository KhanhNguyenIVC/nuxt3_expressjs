
class TeamModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl
    private RESOURCE = '/teams'

    async getAll() {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'GET'
            })
        )
    }
}

export default TeamModule;