export default defineNuxtRouteMiddleware((to, from) => {
    // if (process.server) {
    //     if (to.params.id === '1') {
    //         console.log('111');
    //     }
    //     if (to.path !== '/') {
    //         console.log('222');
    //         return navigateTo('/')
    //     }
    // }

    // console.log(from.path);

    if (process.server) {
        const isLogin = useCookie('isLogin')
        console.log('inside global middleware', Boolean (isLogin.value), Boolean (isLogin.value) == true);

        if (Boolean(isLogin.value) == false && to.path != '/login' ) {
            console.log('aaa');
            return navigateTo('/login');
        } else {
            // console.log('next');
        }
    }
})