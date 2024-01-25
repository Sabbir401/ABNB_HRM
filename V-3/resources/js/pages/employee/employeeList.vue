<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { Bootstrap5Pagination } from "laravel-vue-pagination";

const employees = ref([]);
const isLoading = ref(true);
const error = ref(null);
const selectedStore = ref(null);
const heading = ref(null);
let search = ref("");

watch(search, (Value) => {});

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
    const response = await axios.get(`api/store/${id}/edit`);
    selectedStore.value = response.data;
    heading.value = "Update";
    openModal();
  } catch (err) {
    console.error("Error fetching store data for editing:", err);
  }
};

const mapMaritalStatus = (status) => {
  const statusMap = {
    M: 'Married',
    U: 'Unmarried',
  };

  return statusMap[status] || 'N/A';
};

const mapGender = (status) => {
  const statusMap = {
    M: 'Male',
    F: 'Female',
    O: 'Other'
  };

  return statusMap[status] || 'N/A';
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
          <div class="mr-auto p-2">
            <div class="row">
              <h4 class="card-title m-2">Employee List</h4>
              <Router-Link class="btn btn-success btn-icon" :to="{ name: 'Employee' }">
                <button
                  style="float: left"
                  type="button"
                  class="btn btn-success btn-icon"
                >
                  <i class="mdi mdi-plus"></i>
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
                <th>ID</th>
                <th>Company name</th>
                <th>Full Name</th>
                <th>Father name</th>
                <th>Mother Name</th>
                <th>Spouse Name</th>
                <th>Marital Status</th>
                <th>Date of Birth</th>
                <th>Place of Birth</th>
                <th>Present Address</th>
                <th>Permanent Address</th>
                <th>Contact</th>
                <th>Emergency Contact</th>
                <th>Gender</th>
                <th>Personal Email</th>
                <th>Official Email</th>
                <th>Blood Group</th>
                <th>Religion</th>
                <th>Nationality</th>
                <th>NID</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in employees.data" :key="employee.id">
                <td>{{ employee.id }}</td>
                <td>{{ employee.company ? employee.company.Name: 'N/A' }}</td>
                <td>{{ employee.Full_Name }}</td>
                <td>{{ employee.Father_Name }}</td>
                <td>{{ employee.Mother_Name }}</td>
                <td>{{ employee.Spouse_Name }}</td>
                <td>{{ mapMaritalStatus(employee.Marital_Status) }}</td>
                <td>{{ employee.DOB }}</td>
                <td>{{ employee.Place_of_Birth }}</td>
                <td>{{ employee.Present_Address }}</td>
                <td>{{ employee.Permanent_Address }}</td>
                <td>{{ employee.Contact_No }}</td>
                <td>{{ employee.Emergency_Contact }}</td>
                <td>{{ mapGender(employee.Gender) }}</td>
                <td>{{ employee.Personal_Email }}</td>
                <td>{{ employee.Official_Email }}</td>
                <td>{{ employee.blood ? employee.blood.Name : 'N/A' }}</td>
                <td>{{ employee.blood ? employee.blood.Name : 'N/A' }}</td>
                <td>{{ employee.Nationality }}</td>
                <td>{{ employee.NID }}</td>
                <td>
                  <button
                    class="btn btn-success"
                    @click="editHandler(employee.id)"
                  >
                    Edit
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
