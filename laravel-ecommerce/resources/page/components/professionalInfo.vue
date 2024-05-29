<template>
    <div class="q-pa-md row items-start q-gutter-md">
      <store
        :isOpen="isModalOpened"
        :editStore="selectedStore"
        :updateinfo="heading"
        @modal-close="closeModal"
        @submit="submitHandler"
        name="first-modal"
      />
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            Work Experience
            <q-btn push color="green" label="Add" icon="add" @click="choose" />
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <q-table
              flat
              bordered
              :rows="stores"
              :columns="columns"
              row-key="name"
              hide-bottom
            />
          </div>
        </q-card-section>
      </q-card>
  
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            Training Information
            <q-btn push color="green" label="Add" icon="add" />
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <q-table
              flat
              bordered
              :rows="stores"
              :columns="columns"
              row-key="name"
              hide-bottom
            />
          </div>
        </q-card-section>
      </q-card>
  
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            Academic Information
            <q-btn push color="green" label="Add" icon="add" />
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <q-table
              flat
              bordered
              :rows="stores"
              :columns="columns"
              row-key="name"
              hide-bottom
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </template>


<script>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import store from "./work.vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Level of Education",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Degree",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Institute", field: "fat", sortable: true },
  { name: "carbs", label: "Board", field: "carbs" },
  { name: "protein", label: "Major/Group", field: "protein" },
  { name: "sodium", label: "Result", field: "sodium" },
  {
    name: "calcium",
    label: "Passing Year",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Achievements",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

export default {
  setup() {
    const isModalOpened = ref(false);
    const stores = ref([]);
    const isLoading = ref(true);
    const error = ref(null);
    const selectedStore = ref(null);
    const heading = ref(null);
    let search = ref("");

    watch(search, (value) => {
      // Add your logic for handling search changes
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

    return {
      isModalOpened,
      stores,
      isLoading,
      error,
      selectedStore,
      heading,
      search,
      columns,
      openModal,
      closeModal,
      choose,
      getData,
      editHandler,
      submitHandler,
    };
  },
};
</script>


<style scoped>
.my-card {
  width: 100%;
}
</style>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
