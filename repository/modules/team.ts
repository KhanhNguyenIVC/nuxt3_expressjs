class TeamModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl + '/teams'

    async getAll() {
        return await useCustomFetch('GET', this.BASE_URL)
    }
}

export default TeamModule;