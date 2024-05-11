<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import store from "./components/StoreComponent.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";

const isModalOpened = ref(false);
const stores = ref([]);
const isLoading = ref(true);
const error = ref(null);
const selectedStore = ref(null);
const heading = ref(null);
let search = ref('');

watch(search, (Value) =>{


});

const openModal = () => {
  isModalOpened.value = true;
};

const closeModal = () => {
  isModalOpened.value = false;
};

const choose = () => {
  heading.value = "Insert";
  openModal();
};

const getData = async (page = 1) => {
  try {
    const response = await axios.get(`api/store?page=${page}`);
    stores.value = response.data;
  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
    isLoading.value = false;
  }
};

const editHandler = async (id) => {
  try {
    const response = await axios.get(`api/store/${id}/edit`);
    selectedStore.value = response.data;
    heading.value = "Update";
    openModal();
  } catch (err) {
    console.error("Error fetching store data for editing:", err);
  }
};

const submitHandler = async () => {
  await getData();
};


onMounted(() => getData());
</script>


<template>
  <store
    :isOpen="isModalOpened"
    :editStore="selectedStore"
    :updateinfo="heading"
    @modal-close="closeModal"
    @submit="submitHandler"
    name="first-modal"
  />

  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex">
          <div class="mr-auto p-2">
            <div class="row">
              <h4 class="card-title m-2">Store table</h4>
              <button
                @click="choose"
                style="float: left"
                type="button"
                class="btn btn-success btn-icon"
              >
                <i class="mdi mdi-plus"></i>
              </button>
            </div>
          </div>

          <div class="p-2">
            <select name="" id="" class="form-control">
              <option value="">All</option>
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
          </div>
          <div class="p-2">
            <input
              type="text"
              class="form-control"
              id="exampleInputUsername1"
              placeholder="Search..."
              v-model="search"
            />
          </div>
        </div>

        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="store in stores.data" :key="store.id">
                <td>{{ store.id }}</td>
                <td>{{ store.Name }}</td>
                <td>{{ store.Address }}</td>
                <td>{{ store.Date }}</td>
                <td>{{ store.Status }}</td>
                <td>
                  <button
                    class="btn btn-success"
                    @click="editHandler(store.id)"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Bootstrap5Pagination
            :data="stores"
            @pagination-change-page="getData"
          />
        </div>
      </div>
    </div>
  </div>
</template>
