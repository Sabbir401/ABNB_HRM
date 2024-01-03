import './bootstrap';

import { createApp } from 'vue';

import app from '../layout/home.vue';

import {
    Quasar,
    Notify,
    Dialog
} from 'quasar'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import("../page/home.vue") },
    { path: '/category', component: () => import("../page/category.vue") },
    { path: '/details', component: () => import("../page/details.vue") },
    { path: '/employeeInfo', component: () => import("../page/components/employeeInfo.vue") },
    { path: '/personalInfo', component: () => import("../page/components/personalInfo.vue") },
    { path: '/professionalInfo', component: () => import("../page/components/professionalInfo.vue") },
    { path: '/officialInfo', component: () => import("../page/components/officialInfo.vue") },

    { path: '/employee', component: () => import("../page/employee.vue") },
    { path: '/test', component: () => import("../page/test.vue") }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(app).use(router).use(Quasar, {
    plugins: {
        Notify,
        Dialog
    },
    config: {
        notify: { /* look at QuasarConfOptions from the API card */ }
    }
}).mount("#app");

