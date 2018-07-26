import router from 'vue-router';
import { RouterOptions, RouteConfig } from 'vue-router';
import Vue from 'vue';
Vue.use(router);
export default new router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('@/views/index.vue'),
        },
        {
            path: '/Memeber',
            name: 'Member',
            component: () => import('@/views/wx/template.vue'),
            children: [
                { 
                    path: 'AddCoupon', 
                    component: () => import('@/views/wx/add-coupon.vue'),
                },
            ],
        }
    ],
    mode: 'history',
})

function routerCompose (option: RouterOptions) {
    // logic
    return option;
}