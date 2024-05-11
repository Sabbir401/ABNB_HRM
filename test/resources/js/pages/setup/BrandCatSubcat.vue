<!-- <script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

const data = [
    [1, 2, "Active"],
    [3, 4, "Active"],
    [2, 3, "In-Active"],
];
</script> -->
<script setup>
import { ref, onMounted  } from "vue";
import ModalComponent from "./components/ModalComponent.vue";

const isModalOpened = ref(false);

const openModal = () => {
    isModalOpened.value = true;
};
const closeModal = () => {
    isModalOpened.value = false;
};

const submitHandler = () => {
    //here you do whatever
}

const login = async () =>{
            await axios.get('/api/brand').then(res=>{
                console.log(res.data)
            })
        }

</script>



<template>
    <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal" />
    <div class="row">



        <div class="col-lg-6 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">

                            <h4 class="card-title">Brand Table</h4>
                            <p class="card-description"> Add class <code>.table-hover</code>
                            </p>
                        </div>
                        <div class="col">

                            <button @click="openModal" style="float: right;" type="button"
                                class="btn btn-success  btn-icon">
                                <i class="mdi mdi-plus"></i>
                            </button>

                        </div>
                    </div>
                    <div class="table-responsive">
                        <!-- <DataTable :data="data" class="display table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Brand</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                        </DataTable> -->
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Brand Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BR001</td>
                                    <td>AXE</td>
                                    <td><label class="badge badge-success">Active</label></td>
                                </tr>
                                <tr>
                                    <td>BR002</td>
                                    <td>BRU</td>
                                    <td><label class="badge badge-success">Active</label></td>
                                </tr>
                                <tr>
                                    <td>BR003</td>
                                    <td>CAMAY</td>
                                    <td><label class="badge badge-success">Active</label></td>
                                </tr>
                                <tr>
                                    <td>BR004</td>
                                    <td>COMFORT</td>
                                    <td><label class="badge badge-success">Active</label></td>
                                </tr>
                                <tr>
                                    <td>BR005</td>
                                    <td>DOOVE</td>
                                    <td><label class="badge badge-warning">In-Active</label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Category Table</h4>
                    <p class="card-description"> Add class <code>.table-hover</code>
                    </p>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Category ID</th>
                                    <th>Category Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CT001</td>
                                    <td>SKIN CARE</td>
                                </tr>
                                <tr>
                                    <td>CT002</td>
                                    <td>HAIR CARE</td>
                                </tr>
                                <tr>
                                    <td>CT003</td>
                                    <td>SKIN CLEANSING</td>
                                </tr>
                                <tr>
                                    <td>CT004</td>
                                    <td>FABRIC ENHANCERS</td>
                                </tr>
                                <tr>
                                    <td>CT005</td>
                                    <td>ORAL CARE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">SubCategory Table</h4>
                    <p class="card-description"> Add class <code>.table-hover</code>
                    </p>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category Name</th>
                                    <th>SubCategory Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CT001</td>
                                    <td>SKIN CARE</td>
                                    <td>LIP THERAPY</td>
                                </tr>
                                <tr>
                                    <td>CT002</td>
                                    <td>HAIR CARE</td>
                                    <td>SHAMPOO & CONDITIONER</td>
                                </tr>
                                <tr>
                                    <td>CT003</td>
                                    <td>SKIN CLEANSING</td>
                                    <td>BODY CLEANSING</td>
                                </tr>
                                <tr>
                                    <td>CT004</td>
                                    <td>FABRIC ENHANCERS</td>
                                    <td>RINSE CONDITIONERS</td>
                                </tr>
                                <tr>
                                    <td>CT005</td>
                                    <td>ORAL CARE</td>
                                    <td>ESSENTIAL TOOTHPASTE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
