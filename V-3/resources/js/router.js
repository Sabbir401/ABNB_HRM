import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Login from "./pages/login.vue";
import Register from "./pages/register.vue";
import Dashboard from "./pages/dashboard.vue";
import StorePage from "./pages/setup/StorePage.vue";
import CustomerPage from "./pages/setup/CustomerPage.vue";
import ProductsPage from "./pages/setup/ProductsPage.vue";
import BrandCatSubcat from "./pages/setup/BrandCatSubcat.vue";
import SupplierPage from "./pages/setup/SupplierPage.vue";
import store from "./store/store";

import emp from "./pages/setup/employee.vue";
import employee from "./pages/setup/employee/employeeInfo.vue";
import personal from "./pages/setup/employee/personalInfo.vue";
import official from "./pages/setup/employee/officialInfo.vue";
import professional from "./pages/setup/employee/professionalInfo.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            requireAuth: false,
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            requireAuth: false,
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/store",
        name: "StorePage",
        component: StorePage,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/customer",
        name: "CustomerPage",
        component: CustomerPage,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/products",
        name: "ProductsPage",
        component: ProductsPage,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/brand-cat-subcat",
        name: "BrandCatSubcat",
        component: BrandCatSubcat,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/supplier",
        name: "SupplierPage",
        component: SupplierPage,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/emp",
        name: "Emp",
        component: emp,
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: "/employee",
                name: "Employee",
                component: employee,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/personal",
                name: "Personal",
                component: personal,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/official",
                name: "Official",
                component: official,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/professional",
                name: "Professional",
                component: professional,
                meta: {
                    requireAuth: true,
                },
            },
        ],
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (to.meta.requireAuth && store.getters.getToken == 0) {
        return { name: "Login" };
    }
    if (to.meta.requireAuth == false && localStorage.getItem("token")) {
        return { name: "Dashboard" };
    }
});
export default router;