<script setup>
import { reactive, ref } from "vue";
import { useRoute, RouterView, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const home = ref("active show");
</script>


<template>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/employee"
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
