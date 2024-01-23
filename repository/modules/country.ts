
class CountryModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl
    private RESOURCE = '/countries'

    async getAllCountries() {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}`, {
                method: 'GET',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
            })
        )
    }

    async detail(id: string) {
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}${this.RESOURCE}/${id}`, {
                method: 'GET',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
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
}

export default CountryModule;