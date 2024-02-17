<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";

import { useRoute } from "vue-router";

const route = useRoute();

const empId = parseInt(route.params.id);
console.log(empId);

const emp = ref([]);
const error = ref([]);

const getData = async () => {
  try {
    const response = await axios.get(`/api/employee/${empId}/edit`);

    emp.value = response.data;
  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
  }
};

const mapGender = (status) => {
  const statusMap = {
    M: "Male",
    F: "Female",
    O: "Other",
  };

  return statusMap[status] || "N/A";
};

const mapShift = (status) => {
  const statusMap = {
    D: "Day",
    N: "Night",
  };

  return statusMap[status] || "N/A";
};

onMounted(() => getData());
</script>

<template>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-6 border">
      <div class="card mb-3 mt-3">
        <div class="card-body text-center">
          <img
            src="../../assets/images/profile/profile.jpg"
            width="40%"
            alt=""
          />
          <h5 class="pt-3">{{ emp.Full_Name }}</h5>
          <p class="te" v-for="desig in emp.official" :key="desig.id">
            {{ desig.designation.Name }}
          </p>
        </div>
      </div>
      <div class="card pi mb-3">
        <div class="card-body p-2">
          <h4 class="text-center">Personal Information</h4>
          <table border="1" width="100%">
            <tr>
              <th>Name</th>
              <td>Kazi Sabbir Ahmed</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>Kazi Sabbir Ahmed</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>Kazi Sabbir Ahmed</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="card pi mb-3">
        <div class="card-body p-2">
          <h4 class="text-center">Personal Information</h4>
          <table border="1" width="100%">
            <tr>
              <th>Name</th>
              <td>Kazi Sabbir Ahmed</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>Kazi Sabbir Ahmed</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>Kazi Sabbir Ahmed</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="col-lg-8 col-md-8 col-sm-6">
      <div class="card">
        <div class="card-body p-2">
          <table border="1" width="100%">
            <tr>
              <th class="p-2 text-center" colspan="4">Employee Information</th>
            </tr>
            <tr>
              <th class="p-2">Full Name</th>
              <td class="p-2">Sabbir</td>
              <th class="p-2">Father's Name</th>
              <td class="p-2">Benzir</td>
            </tr>
            <tr>
              <th class="p-2">Full Name</th>
              <td class="p-2">Sabbir</td>
              <th class="p-2">Father's Name</th>
              <td class="p-2">Benzir</td>
            </tr>
            <tr>
              <th class="p-2">Full Name</th>
              <td class="p-2">Sabbir</td>
              <th class="p-2">Father's Name</th>
              <td class="p-2">Benzir</td>
            </tr>
            <tr>
              <th class="p-2">Full Name</th>
              <td class="p-2">Sabbir</td>
              <th class="p-2">Father's Name</th>
              <td class="p-2">Benzir</td>
            </tr>
            <tr>
              <th class="p-2">Full Name</th>
              <td class="p-2">Sabbir</td>
              <th class="p-2">Father's Name</th>
              <td class="p-2">Benzir</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pi table tr th {
  padding: 8px;
  width: 40%;
}
.pi table tr td {
  padding: 8px;
  width: 60%;
}
</style>
