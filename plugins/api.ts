import VideosModule from '../repository/modules/video';

interface IApiInstance {
    videos: VideosModule;
}

export default defineNuxtPlugin((nuxtApp) => {
    const modules: IApiInstance = {
        videos: new VideosModule(),
    };

    return {
        provide: {
            api: modules
        }
    };
});
