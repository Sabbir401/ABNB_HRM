<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { Bootstrap5Pagination } from "laravel-vue-pagination";

import { useRoute } from "vue-router";

const employee = ref([]);
const department = ref([]);
const empp = ref([]);

const error = ref([]);

const form = ref({
  department: "",
  degreeId: "",
});

const getData = async () => {
  try {
    // const response = await axios.get("/api/employee");
    const responsedept = await axios.get("/api/department");

    // employee.value = response.data;
    department.value = responsedept.data;
  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
  }
};

const getEmployee = async (id) => {
  try {
    const response = await axios.get(`/api/emp/${id}`);
    empp.value = response.data;
  } catch (eempprror) {
    console.error("Error updating store:", error);
    // Handle the error, e.g., display an error message
  }
};

onMounted(() => getData());
</script>

<template>
  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex">
          <!-- <div class="mr-auto p-2">
              <div class="row">

              </div>
            </div>
            <div class="p-2">
              <select name="" id="" class="form-control" @change="getDegree(form.levelofEduId)">
                <option selected disabled>select</option>
                <option
                  v-for="emp in employee.data"
                  :key="emp.id"
                  :value="emp.id"
                >
                  {{ emp.Full_Name }}
                </option>
              </select>
            </div> -->
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Company</label>
              <select class="form-control" name="status" id="">
                <option selected disabled>select</option>
                <option></option>
              </select>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Department</label>
              <select
                class="form-control"
                name="status"
                id=""
                v-model="form.department"
                @change="getEmployee(form.department)"
              >
                <option selected disabled>select</option>
                <option
                  v-for="dept in department"
                  :key="dept.id"
                  :value="dept.id"
                >
                  {{ dept.Name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Employee Name</label>
              <select class="form-control" name="status" id="">
                <option selected disabled>select</option>
                <option
                  v-for="emp in employee.data"
                  :key="emp.id"
                  :value="emp.id"
                >
                  {{ emp.Full_Name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="text-center">
            <h3>Attendance of {{}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
