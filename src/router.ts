import router from 'vue-router';
import { RouterOptions, RouteConfig } from 'vue-router';
import Vue from 'vue';
Vue.use(router);
export default new router({
    routes: [
        {
            path: '/wx',
            name: 'Index',
            component: () => import('@/views/index.vue'),
            children: [
                {
                    path: 'memeber',
                    component: () => import('@/views/wx/member.vue'),
                }
            ],
        },
        {
            path: 'memeber',
            name: 'Member',
            component: () => import('@/views/wx/member.vue'),
        }
    ],
    mode: 'history',
})

function routerCompose (option: RouterOptions) {
    // logic
    return option;
}