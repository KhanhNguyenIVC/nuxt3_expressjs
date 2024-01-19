
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

    async detail(id: string) {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}/${id}`, {
                method: 'GET'
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
}

export default CountryModule;