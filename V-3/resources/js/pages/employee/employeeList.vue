<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import router from "../../router";

const employees = ref([]);
const isLoading = ref(true);
const error = ref(null);
const empEdit = ref(null);
const heading = ref(null);
let search = ref("");

const getData = async (page = 1) => {
  try {
    const response = await axios.get(`api/employee?page=${page}`);
    employees.value = response.data;
  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
    isLoading.value = false;
  }
};

const editHandler = async (id) => {
  try {
    const response = await axios.get(`api/employee/${id}/edit`);
    empEdit.value = response.data;
    heading.value = "Update";
    openModal();
  } catch (err) {
    console.error("Error fetching store data for editing:", err);
  }
};

const mapMaritalStatus = (status) => {
  const statusMap = {
    M: "Married",
    U: "Unmarried",
  };

  return statusMap[status] || "N/A";
};

const mapGender = (status) => {
  const statusMap = {
    M: "Male",
    F: "Female",
    O: "Other",
  };

  return statusMap[status] || "N/A";
};

const submitHandler = async () => {
  await getData();
};

onMounted(() => getData());
</script>


<template>
  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex">
          <div class="mr-auto p-1">
            <div class="row">
              <h4 class="card-title m-2">Employee List</h4>
              <Router-Link
                :to="{ name: 'Employee' }"
              >
                <button
                  style="float: left"
                  type="button"
                  class="btn btn-success btn-icon p-1"
                >
                  <i class="mdi mdi-plus m-auto"></i>
                </button>
              </Router-Link>
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
                <th>Employee ID</th>
                <th>Full Name</th>
                <th>Date of Birth</th>
                <th>Contact</th>
                <th>Official Email</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in employees.data" :key="employee.id">
                <td>{{ employee.Employee_Id }}</td>
                <td>{{ employee.Full_Name }}</td>
                <td>{{ employee.DOB }}</td>
                <td>{{ employee.Contact_No }}</td>
                <td>{{ employee.Official_Email }}</td>
                <td>
                  <button
                    class="btn btn-primary mr-2 p-1"
                    @click="router.push(`/empdetails/${employee.id}`)"
                  >
                    <i class="mdi mdi-account m-auto"></i>
                  </button>
                  <button
                    class="btn btn-success p-1"
                    @click="router.push(`/employee/${employee.id}`)"
                  >
                  <i class="mdi mdi-pencil m-auto"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Bootstrap5Pagination
            :data="employees"
            @pagination-change-page="getData"
          />
        </div>
      </div>
    </div>
  </div>
</template>
