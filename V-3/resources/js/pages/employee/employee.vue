<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRoute, RouterView, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute()
const router = useRouter()

const eid = store.state.employeeId;
const error = ref(null);
const employee = ref(null);

const getData = async () => {
  try {
    const responseEmp = await axios.get(`api/employee/${eid}`);
    employee.value = responseEmp.data;
  } catch (err) {
    error.value = err.message || "Error fetching data";
  }
};



onMounted(() => getData());


</script>


<template>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" :to="{ name: 'Employee' }"
          >Employee Information</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/personal"
          >Personal Information</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/professional"
          >Professional Information</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/official"
          >Official Information</router-link
        >
      </li>
    </ul>
    <RouterView />

</template>
