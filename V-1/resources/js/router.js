import { createWebHistory, createRouter } from "vue-router";

import employee from './pages/employeeInfo.vue';
import personal from './pages/personalInfo.vue';
import professonal from './pages/professionalInfo.vue';

const routes = [
    {
        path : '/employee',
        name: 'employee',
        component: employee
    },
    {
        path : '/personal',
        name: 'personal',
        component: personal
    },
    {
        path : '/professonal',
        name: 'professonal',
        component: professonal
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;
