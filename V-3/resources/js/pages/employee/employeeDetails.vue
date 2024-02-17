<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";

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

const mapStatus = (status) => {
  const statusMap = {
    M: "Married",
    U: "Unmarried",
    S: "Single",
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
          <p class="m-0" v-for="desig in emp.official" :key="desig.id">
            {{ desig.designation.Name }}
          </p>
          <p class="text-muted mb-0">{{ emp.Present_Address }}</p>
          <p class="text-muted mb-0">{{ emp.Contact_No }}</p>
          <p class="text-muted mb-0">{{ emp.Official_Email }}</p>
        </div>
      </div>
      <div class="card pi mb-3">
        <div class="card-body p-2">
          <h4 class="text-center">Nominee Information</h4>
          <table border="1" width="100%" v-for="nom in emp.nominee" :key="nom.id">
            <tr>
              <th>Full Name</th>
              <td>{{ nom.Nominee_Name }}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{{ nom.DOB }}</td>
            </tr>
            <tr>
              <th>Contact No</th>
              <td>{{ nom.Contact_No }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ nom.Email }}</td>
            </tr>
            <tr>
              <th>National ID</th>
              <td>{{ nom.NID }}</td>
            </tr>
            <tr>
              <th>Share</th>
              <td>{{ nom.Share }}</td>
            </tr>
            <tr>
              <th>Present Address</th>
              <td>{{ nom.Personal_Address }}</td>
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
              <td class="p-2">{{ emp.Full_Name }}</td>
              <th class="p-2">Father's Name</th>
              <td class="p-2">{{ emp.Father_Name }}</td>
            </tr>
            <tr>
              <th class="p-2">Mother's Name</th>
              <td class="p-2">{{ emp.Mother_Name }}</td>
              <th class="p-2">Spouse Name</th>
              <td class="p-2">{{ emp.Spouse_Name }}</td>
            </tr>
            <tr>
              <th class="p-2">Marital Status</th>
              <td class="p-2">{{ mapStatus(emp.Marital_Status) }}</td>
              <th class="p-2">Date of Birth</th>
              <td class="p-2">{{ emp.DOB }}</td>
            </tr>
            <tr>
              <th class="p-2">Plaece of Birth</th>
              <td class="p-2">{{ emp.Place_of_Birth }}</td>
              <th class="p-2">Emergency Contact</th>
              <td class="p-2">{{ emp.Emergency_Contact }}</td>
            </tr>
            <tr>
              <th class="p-2">Present Address</th>
              <td class="p-2">{{ emp.Present_Address }}</td>
              <th class="p-2">Permanent Address</th>
              <td class="p-2">{{ emp.Permanent_Address }}</td>
            </tr>
            <tr v-if="emp && emp.religion">
              <th class="p-2">Religion</th>
              <td class="p-2">{{ emp.religion.Name }}</td>
              <th class="p-2">Gender</th>
              <td class="p-2">{{ mapGender(emp.Gender) }}</td>
            </tr>
            <tr v-if="emp && emp.blood">
              <th class="p-2">Blood Group</th>
              <td class="p-2">{{ emp.blood.Name }}</td>
              <th class="p-2">Nationality</th>
              <td class="p-2">{{ emp.Nationality }}</td>
            </tr>
            <tr>
              <th class="p-2">NID</th>
              <td class="p-2">{{ emp.NID }}</td>
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

*{
    font-size: 14px;
}
</style>
