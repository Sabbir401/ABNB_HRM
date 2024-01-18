<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const employee = ref({
  companyId: "",
  employeeId: "",
  cardNo: "",
  fullName: "",
  fatherName: "",
  motherName: "",
  spouseName: "",
  maritalStatus: "",
  dob: "",
  pob: "",
  presentAddress: "",
  permanentAddress: "",
  officialContact: "",
  emergencyContact: "",
  gender: "",
  personalEmail: "",
  officialEmail: "",
  religion: "",
  bloodGroup: "",
  nationality: "",
  nid: "",
});

const bloods = ref([]);
const religions = ref([]);
const companies = ref([]);
const phones = ref([]);
const error = ref([]);

const getData = async () => {
  try {
    const responseBlood = await axios.get("api/blood");
    const responseReligion = await axios.get("api/religion");
    const responseCompany = await axios.get("api/company");
    const responsePhone = await axios.get("api/phone");

    bloods.value = responseBlood.data;
    religions.value = responseReligion.data;
    companies.value = responseCompany.data;
    phones.value = responsePhone.data;
  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  Object.keys(employee).forEach((key) => {
    employee[key] = "";
  });
};

const submitForm = async () => {
  try {
    const response = await axios.post("api/employee", employee.value);
    if (response.data.success) {
      alert("Successfully Inserted");
      resetForm();
    }
  } catch (err) {
    console.error("Error submitting form:", err);
  }
};

onMounted(() => getData());
</script>

<template>
  <div class="mt-5">
    <form @submit.prevent="submitForm">
      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Company Name</label>
          <select
            v-model="employee.companyId"
            name=""
            id=""
            class="form-control"
          >
            <option selected disabled>select</option>
            <option
              v-for="company in companies"
              :key="company.id"
              :value="company.id"
            >
              {{ company.Name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Employee ID</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.employeeId"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Card No</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.cardNo"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.fullName"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Father's Name</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.fatherName"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Mother's Name</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.motherName"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Spouse Name</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.spouseName"
          />
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6">
          <label for="exampleInputEmail1" class=""
            >Marital Status<i class="fa fa-birthday-cake" aria-hidden="true"></i
          ></label>
          <select
            v-model="employee.maritalStatus"
            name=""
            id=""
            class="form-control"
          >
            <option selected disabled>-select-</option>
            <option value="M">Married</option>
            <option value="U">Unmarried</option>
          </select>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6">
          <label for="exampleInputEmail1" class="">Date of Birth</label>
          <input
            type="date"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.dob"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Place of Birth</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.pob"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Present Address</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model="employee.presentAddress"
          ></textarea>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Permanent Address</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model="employee.permanentAddress"
          ></textarea>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Official Contact</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.officialContact"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Emergency Contact</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.emergencyContact"
          />
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Gender</label>
          <select v-model="employee.gender" name="" id="" class="form-control">
            <option selected disabled>-select-</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Personal Email</label>
          <input
            type="email"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.personalEmail"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Official Email</label>
          <input
            type="email"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.officialEmail"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Religion</label>
          <select
            v-model="employee.religion"
            name=""
            id=""
            class="form-control"
          >
            <option selected disabled>select</option>
            <option
              v-for="religion in religions"
              :key="religion.id"
              :value="religion.id"
            >
              {{ religion.Name }}
            </option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="" class="">Blood Group</label>
          <select
            v-model="employee.bloodGroup"
            name=""
            id=""
            class="form-control"
          >
            <option selected disabled>select</option>
            <option v-for="blood in bloods" :key="blood.id" :value="blood.id">
              {{ blood.Name }}
            </option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Nationality</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.nationality"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">NID</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="employee.nid"
          />
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="reset" class="btn btn-danger btn-lg m-3">Reset</button>
        <button type="submit" class="btn btn-primary btn-lg m-3">Save</button>
      </div>
    </form>
  </div>
</template>


