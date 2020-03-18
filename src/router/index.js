import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: Msite
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/',
            redirect: '/msite'
        }
    ]
});