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

import empList from "./pages/employee/employeeList.vue"
import empDetails from "./pages/employee/employeeDetails.vue"
import emp from "./pages/employee/employee.vue";
import employee from "./pages/employee/employeeInfo.vue";
import personal from "./pages/employee/personalInfo.vue";
import official from "./pages/employee/officialInfo.vue";
import professional from "./pages/employee/professionalInfo.vue";



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
        path: "/employeelist",
        name: "EmpList",
        component: empList,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/empdetails/:id",
        name: "EmpDetails",
        component: empDetails,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/emp/:id",
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
                path: "/employee/:id",
                name: "Employeeid",
                component: employee,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/personal/",
                name: "Personal",
                component: personal,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/personal/:id",
                name: "Personalid",
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
                path: "/official/:id",
                name: "Officialid",
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
            {
                path: "/professional/:id",
                name: "Professionalid",
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
