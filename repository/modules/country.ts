
class CountryModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl
    private RESOURCE = '/countries'

    async getAllCountries() {
        return await useAsyncData(() => 
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'GET'
            })
        )
    }
}

export default CountryModule;