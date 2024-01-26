class CountryModule {
    private runtimeConfig = useRuntimeConfig()
    private BASE_URL = this.runtimeConfig.public.apiBaseUrl + '/countries'
    private OLD_BASE_URL = this.runtimeConfig.public.apiBaseUrl
    private RESOURCE = '/countries'

    async getAllCountries() {
        return await useCustomFetch('GET', this.BASE_URL)
    }

    async detail(id: string) {
        // return await useCustomFetch('GET', `${this.BASE_URL}/${id}`)
        return await useAsyncData(() =>
            $fetch(`${this.BASE_URL}/${id}`, {
                method: 'GET',
                headers: new Headers({
                    "ngrok-skip-browser-warning": "69420",
                }),
            })
        )
    }

    async edit(data: object) {
        // return await useCustomFetch('PUT', this.BASE_URL)
        return await useAsyncData(() =>
        $fetch(this.BASE_URL, {
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