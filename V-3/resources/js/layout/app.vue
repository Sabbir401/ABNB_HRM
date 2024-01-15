<script setup>
import { useStore } from 'vuex';
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../css/style.css";
const store = useStore();


const loged = false;


</script>
<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Hidden brand {{ $store.getters.getToken }}</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <Router-Link class="nav-link" :to="{ name: 'Home' }">Home</Router-Link>
                </li>
                <li class="nav-item">
                    <Router-Link class="nav-link" :to="{ name: 'Login' }" v-if="$store.getters.getToken == 0">Login</Router-Link>
                </li>
                <li class="nav-item">
                    <Router-Link class="nav-link" :to="{ name: 'Register' }"  v-if="$store.getters.getToken == 0">Register</Router-Link>
                </li>
                <li class="nav-item">
                    <Router-Link class="nav-link" :to="{ name: 'Dashboard' }" v-if="$store.getters.getToken !== 0" >Dashboard</Router-Link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav> -->
    <div class="container-scroller">
        <!-- partial:partials/_sidebar.html -->
        <SideBar v-if="$store.getters.getToken !== 0"></SideBar>

        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_navbar.html -->
            <NavBar v-if="$store.getters.getToken !== 0"></NavBar>

            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper" style="overflow-y: scroll; height: 70vh;">
                    <router-view></router-view>
                </div>
                <!-- content-wrapper ends -->
                <!-- partial:partials/_footer.html -->
                <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                        <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright ©
                            artisanbn.com 2024</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Created by <a
                                href="#" target="_blank">ARTISAN
                                </a> from artisanbn.com</span>
                    </div>
                </footer>
                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
</template>

