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

    <div class="container-scroller">
        <!-- partial:partials/_sidebar.html -->
        <SideBar v-if="$store.getters.getToken !== 0"></SideBar>

        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_navbar.html -->
            <NavBar v-if="$store.getters.getToken !== 0"></NavBar>

            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
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

