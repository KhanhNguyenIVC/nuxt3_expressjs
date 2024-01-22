import VideosModule from '../repository/modules/video';
import CountriesModule from '../repository/modules/country';
import TeamModule from '../repository/modules/team';

interface IApiInstance {
    videos: VideosModule;
    countries: CountriesModule;
    teams: TeamModule;
}

export default defineNuxtPlugin(() => {
    const modules: IApiInstance = {
        videos: new VideosModule(),
        countries: new CountriesModule(),
        teams: new TeamModule(),
    };

    return {
        provide: {
            api: modules
        }
    };
});
