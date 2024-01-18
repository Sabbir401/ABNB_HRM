<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import academic from "../employee/component/academicComponent.vue";
import training from "../employee/component/trainingComponent.vue";
import work from "../employee/component/workComponent.vue";

const stores = ref([]);
const isLoading = ref(true);
const error = ref(null);
const selectedStore = ref(null);
const heading = ref(null);

const academicModel = ref(false);
const trainingModel = ref(false);
const workModel = ref(false);

const academicOpened = (title) => {
    heading.value = title;
    academicModel.value = true;
};

const academicClose = () => {
    academicModel.value = false;
};

const trainingOpened = (title) => {
    heading.value = title;
    trainingModel.value = true;
};

const trainingClose = () => {
    trainingModel.value = false;
};

const workOpened = (title) => {
    heading.value = title;
    workModel.value = true;
};

const workClose = () => {
    workModel.value = false;
};



const getData = async () => {
  try {
    const response = await axios.get("api/store");
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
  <academic
    :isOpen="academicModel"
    :editStore="selectedStore"
    :updateinfo="heading"
    @modal-close="academicClose"
    @submit="submitHandler"
    name="first-modal"
  />

  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="row mb-2">
          <h4 class="card-title m-2">Academic Information</h4>
          <button
            @click="academicOpened('Save')"
            style="float: left"
            type="button"
            class="btn btn-success btn-icon"
          >
            <i class="mdi mdi-plus"></i>
          </button>
        </div>

        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institute</th>
                <th>Board/University</th>
                <th>Scale</th>
                <th>Result</th>
                <th>Years Of Passing</th>
                <th>Acheivement</th>
                <th>Remarks</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr >

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>



  <training
    :isOpen="trainingModel"
    :editStore="selectedStore"
    :updateinfo="heading"
    @modal-close="trainingClose"
    @submit="submitHandler"
    name="first-modal"
  />

  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="row mb-2">
          <h4 class="card-title m-2">Training Information</h4>
          <button
            @click="trainingOpened('Save')"
            style="float: left"
            type="button"
            class="btn btn-success btn-icon"
          >
            <i class="mdi mdi-plus"></i>
          </button>
        </div>

        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Training Infomation</th>
                <th>Organized By</th>
                <th>Topic Covered</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Remarks</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>



  <work
    :isOpen="workModel"
    :editStore="selectedStore"
    :updateinfo="heading"
    @modal-close="workClose"
    @submit="submitHandler"
    name="first-modal"
  />

  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="row mb-2">
          <h4 class="card-title m-2">Work Experience</h4>
          <button
            @click="workOpened('Save')"
            style="float: left"
            type="button"
            class="btn btn-success btn-icon"
          >
            <i class="mdi mdi-plus"></i>
          </button>
        </div>

        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Company Business</th>
                <th>Company Address</th>
                <th>Designation</th>
                <th>Job Nature</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Job Responsibility</th>
                <th>Last Salary</th>
                <th>Continuing</th>
                <th>Remarks</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
