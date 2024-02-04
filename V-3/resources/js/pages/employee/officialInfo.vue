<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";

import { useRoute } from "vue-router";

const route = useRoute();

const empId = parseInt(route.params.id);
console.log(empId);

const official = ref({
  departmentId: "",
  designationId: "",
  employeeGrade: "",
  areaId: "",
  territoryId: "",
  supervisorId: "",
  doj: "",
  provationPeriod: "",
  doc: "",
  jobLocation: "",
  shift: "",
  channel: "",
});

const departments = ref([]);
const areas = ref([]);
const territories = ref([]);
const emptypes = ref([]);
const supervisor = ref([]);

const error = ref([]);
const empEdit = ref([]);

const getData = async () => {
  try {
    const responseDepartment = await axios.get("api/department");
    const responseEmpType = await axios.get("api/empType");
    const responseArea = await axios.get("api/area");
    const responseTerritory = await axios.get("api/territory");
    const responseSuper = await axios.get("api/employee");

    departments.value = responseDepartment.data;
    emptypes.value = responseEmpType.data;
    areas.value = responseArea.data;
    territories.value = responseTerritory.data;
    supervisor.value = responseSuper.data;

  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
  }
};

const store = useStore();

const resetForm = () => {
  Object.keys(employee).forEach((key) => {
    employee[key] = "";
  });
};
// const store = useStore();

const editHandler = async () => {
  try {
    const response = await axios.get(`api/employee/${empId}/edit`);
    empEdit.value = response.data;
  } catch (err) {
    console.error("Error fetching store data for editing:", err);
  }
};

const submitForm = async () => {
  try {
    const response = await axios.post("api/employee", employee.value);
    if (response.data.success) {
      alert("Successfully Inserted");
      store.dispatch("setEmployeeId", response.data.empid);
      resetForm();
    }
  } catch (err) {
    console.error("Error submitting form:", err);
  }
};

const chooseMount = async () => {
  if (empId) {
    editHandler();
  } else {
    getData();
  }
};

onMounted(() => chooseMount());
</script>

<template>
  <div class="mt-5">
    <form @submit.prevent="submitForm">
      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Department</label>
          <select class="form-control" name="status" id="">
            <option selected disabled>select</option>
            <option
              v-for="dept in departments.department"
              :key="dept.id"
              :value="dept.id"
            >
              {{ dept.Name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Designation</label>
          <select class="form-control" name="status" id="">
            <option selected disabled>select</option>
            <option
              v-for="des in departments.designation"
              :key="des.id"
              :value="des.id"
            >
              {{ des.Name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Employee Grade</label>
          <select name="" id="" class="form-control">
            <option selected disabled value="">select</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Area</label>
          <select class="form-control" name="status" id="">
            <option selected disabled>select</option>
            <option v-for="area in areas" :key="area.id" :value="area.id">
              {{ area.Name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Territory</label>
          <select class="form-control" name="status" id="">
            <option selected disabled>select</option>
            <option v-for="ter in territories" :key="ter.id" :value="ter.id">
              {{ ter.Name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Employee Type</label>
          <select class="form-control" name="status" id="">
            <option selected disabled>select</option>
            <option v-for="typ in emptypes" :key="typ.id" :value="typ.id">
              {{ typ.Name }}
            </option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Supervisor</label>
          <select class="form-control" name="status" id="">
            <option selected disabled>select</option>
            <option
              v-for="des in supervisor.data"
              :key="des.id"
              :value="des.id"
            >
              {{ des.Full_Name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Date of Joining</label>
          <input
            type="date"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Date of Confirmation</label>
          <input
            type="date"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Probation Period</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Job Location</label>
          <select name="" id="" class="form-control">
            <option value="">-select-</option>
            <option value="">Dhaka</option>
            <option value="">Sylhet</option>
            <option value="">CHandpur</option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Shift</label>
          <select name="" id="" class="form-control">
            <option value="">-select-</option>
            <option value="">Day</option>
            <option value="">Night</option>
          </select>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button type="reset" class="btn btn-danger btn-lg m-3">Reset</button>
        <button type="submit" class="btn btn-primary btn-lg m-3">Save</button>
      </div>
    </form>
  </div>
</template>
