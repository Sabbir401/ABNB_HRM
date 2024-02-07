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
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
            <h3 class="text-dark">Employee Information (EID: {{ emp.id }})</h3>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src="../../assets/images/profile/profile.jpg"
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h5 class="my-2">{{ emp.Full_Name }}</h5>
              <p class="te" v-for="desig in emp.official" :key="desig.id">
                {{ desig.designation.Name }}
              </p>
              <p class="text-muted mb-2">{{ emp.Present_Address }}</p>
              <p class="text-muted mb-2">{{ emp.Contact_No }}</p>
              <p class="text-muted mb-2">{{ emp.Official_Email }}</p>
              <div class="d-flex justify-content-center mb-2">
                <button type="button" class="btn btn-primary mr-1">
                  Follow
                </button>
                <button type="button" class="btn btn-outline-primary ms-1">
                  Message
                </button>
              </div>
            </div>
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <li
                  class="list-group-item d-flex align-items-center p-3 text-dark"
                >
                  Hello
                </li>
                <li class="list-group-item d-flex align-items-center p-3"></li>
                <li class="list-group-item d-flex align-items-center p-3"></li>
                <li class="list-group-item d-flex align-items-center p-3"></li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center p-3"
                ></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <h3 class="text-dark">Personal Information</h3>
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Full_Name }}</p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Father's Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Father_Name }}</p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Mother's Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Mother_Name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Spouse Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Spouse_Name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Date of Birth</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.DOB }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Gender</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ mapGender(emp.Gender) }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Place of Birth</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Place_of_Birth }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Present Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Present_Address }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Permanent Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Permanent_Address }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Emergency Contact</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Emergency_Contact }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Personal Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Personal_Email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Blood Group</p>
                </div>
                <div class="col-sm-9" v-if="emp && emp.blood">
                  <p class="text-muted mb-0">{{ emp.blood.Name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Personal Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Personal_Email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Religion</p>
                </div>
                <div class="col-sm-9" v-if="emp && emp.religion">
                  <p class="text-muted mb-0">{{ emp.religion.Name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Nationality</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.Nationality }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">NID</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ emp.NID }}</p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="text-dark">Official Information</h3>
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Department</p>
                </div>
                <div class="col-sm-9">
                  <p
                    class="text-muted mb-0"
                    v-for="dept in emp.official"
                    :key="dept.id"
                  >
                    {{ dept.department.Name }}
                  </p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Designation</p>
                </div>
                <div class="col-sm-9">
                  <p
                    class="text-muted mb-0"
                    v-for="desig in emp.official"
                    :key="desig.id"
                  >
                    {{ desig.designation.Name }}
                  </p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Employee Grade</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="grade in emp.official"
                    :key="grade.id"
                  >Grade:
                    {{ grade.Employee_Grade }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Employee Type</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="typ in emp.official"
                    :key="typ.id"
                  >
                    {{ typ.employee_type.Name }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Area</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="area in emp.official"
                    :key="area.id"
                  >
                    {{ area.area.Name }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Territory</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="ter in emp.official"
                    :key="ter.id"
                  >
                    {{ ter.territory.Name }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Supervisor</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="sup in emp.official"
                    :key="sup.id"
                  >
                    {{ sup.supervisor.Full_Name }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Date of Joining</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="date in emp.official"
                    :key="date.id"
                  >
                    {{ date.DOC }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Provation Period</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="pp in emp.official"
                    :key="pp.id"
                  >
                    {{ pp.Provation_period }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Job Location</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="jl in emp.official"
                    :key="jl.id"
                  >
                    {{ jl.country.Name }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Shift</p>
                </div>
                <div class="col-sm-9">
                    <p
                    class="text-muted mb-0"
                    v-for="i in emp.official"
                    :key="i.id"
                  >
                    {{ mapShift(i.Shift) }}
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.77rem">Web Design</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Website Markup
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 72%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">One Page</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 89%"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Mobile Template
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 55%"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Backend API
                  </p>
                  <div class="progress rounded mb-2" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 66%"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.77rem">Web Design</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Website Markup
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 72%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">One Page</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 89%"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Mobile Template
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 55%"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Backend API
                  </p>
                  <div class="progress rounded mb-2" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 66%"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


