<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";

const store = useStore();

const nominee = ref({
  eid: store.state.employeeId,
  nomineeName: "",
  dob: "",
  contactNo: "",
  email: "",
  nid: "",
  share: "",
  presentAddress: "",
});

const child = ref({
  eid: store.state.employeeId,
  childName: "",
  nid: "",
  email: "",
  contactNo: "",
  dob: "",
});

const error = ref([]);

const getData = async () => {
  try {
    const responsePhone = await axios.get("api/phone");

    phones.value = responsePhone.data;
  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
  }
};

const resetForm = () => {
  Object.keys(nominee).forEach((key) => {
    nominee[key] = "";
  });
};

const submitForm = async () => {
  try {
    const requestData = {
      nominee: nominee.value,
      child: child.value,
    };
    const response = await axios.post("api/nominee", requestData);
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
    <h2 class="fs-4">Nominee Information {{ eid }}</h2>
    <form @submit.prevent="submitForm">
      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Nominee Name {{ store.state.employeeId }}</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="nominee.nomineeName"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Date of Birth</label>
          <input
            type="date"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="nominee.dob"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Contact No</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="nominee.contactNo"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Email Id</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="nominee.email"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">National Id</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="nominee.nid"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Share %</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="nominee.share"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <label for="exampleInputEmail1" class="">Present Address</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model="nominee.presentAddress"
          ></textarea>
        </div>
      </div>
      <hr class="border border-3 border border-dark" />

      <h2 class="fs-4">Child Information</h2>
      <div class="row mb-3">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Child Name</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="child.childName"
          />
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">NID/Birth Reg</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="child.nid"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Email Id</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="child.email"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Contact No</label>
          <input
            type="text"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="child.contactNo"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Date of Birth</label>
          <input
            type="date"
            class="form-control"
            id="disabledTextInput"
            aria-describedby="emailHelp"
            v-model="child.dob"
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


