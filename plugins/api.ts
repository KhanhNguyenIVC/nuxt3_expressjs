import VideosModule from '../repository/modules/video';
import CountriesModule from '../repository/modules/country';

interface IApiInstance {
    videos: VideosModule;
    countries: CountriesModule;
}

export default defineNuxtPlugin(() => {
    const modules: IApiInstance = {
        videos: new VideosModule(),
        countries: new CountriesModule(),
    };

    return {
        provide: {
            api: modules
        }
    };
});
