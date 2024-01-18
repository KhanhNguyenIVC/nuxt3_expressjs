export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) {
        const isLogin = useCookie('isLogin')
        console.log('inside global middleware', Boolean (isLogin.value), Boolean (isLogin.value) == true);

        if (Boolean(isLogin.value) == false && to.path != '/login' ) {
            console.log('there is no cookie redirect to login');
            return navigateTo('/login');
        } else {
            // console.log('next');
        }
    }
})