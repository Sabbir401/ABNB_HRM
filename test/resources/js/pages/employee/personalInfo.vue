<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const empId = parseInt(route.params.id);

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
const empEdit = ref([]);

// watch(empEdit, (newEmpData) => {
//   if (newEmpData) {
//     nominee.value.nomineeName = newEmpData.nominee.Nominee_Name;
//     nominee.value.dob = newEmpData.nominee.DOB;
//     nominee.value.contactNo = newEmpData.nominee.Contact_No;
//     nominee.value.email = newEmpData.nominee.Email;
//     nominee.value.nid = newEmpData.nominee.NID;
//     nominee.value.share = newEmpData.nominee.Share;
//     nominee.value.presentAddress = newEmpData.nominee.Personal_Address;

//     child.value.childName = newEmpData.Child_Name;
//     child.value.nid = newEmpData.child.NID;
//     child.value.email = newEmpData.child.Email;
//     child.value.contactNo = newEmpData.child.Contact_No;
//     child.value.dob = newEmpData.child.DOB;
//   }
// });

const getData = async () => {
  try {
    if (empId) {
      editHandler();
    }

  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
  }
};

const resetForm1 = () => {
  Object.keys(nominee).forEach((key) => {
    nominee[key] = "";
  });
};

const resetForm = () => {
  Object.keys(employee.value).forEach((key) => {
    if (typeof employee.value[key] === "string") {
      employee.value[key] = "";
    }
  });
};

const editHandler = async () => {
  try {
    const requestData = await axios.get(`/api/nominee/${empId}/edit`);
    const responseData = requestData.data;
    if (responseData.nominee && responseData.nominee.length > 0) {
      const nomineeData = responseData.nominee[0];
      nominee.value = {
        nomineeName: nomineeData.Nominee_Name,
        dob: nomineeData.DOB,
        contactNo: nomineeData.Contact_No,
        email: nomineeData.Email,
        nid: nomineeData.NID,
        share: nomineeData.Share,
        presentAddress: nomineeData.Personal_Address
      };
    }
    if (responseData.child && responseData.child.length > 0) {
      const childData = responseData.child[0];
      child.value = {
        childName: childData.Child_Name,
        nid: childData.NID,
        email: childData.Email,
        contactNo: childData.Contact_No,
        dob: childData.DOB
      };
    }
  } catch (err) {
    console.error("Error fetching store data for editing:", err);
  }
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

const update = async () => {
  try {
    const requestData = {
      nominee: nominee.value,
      child: child.value,
    };
    const response = await axios.put(`/api/nominee/${empId}`, requestData);
    if (response.data.success) {
      alert("Successfully Updated");
      resetForm();
      resetForm1();
    }
  } catch (error) {
    console.error("Error updating store:", error);
    // Handle the error, e.g., display an error message
  }
};

const submit = () => {
  if (empId) {
    update();
  } else {
    submitForm();
  }
};

onMounted(() => getData());
</script>



<template>
  <div class="mt-5">
    <h2 class="fs-4">Nominee Information </h2>
    <form @submit.prevent="submit">
      <div class="row mb-3">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <label for="exampleInputEmail1" class="">Nominee Name</label>
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


