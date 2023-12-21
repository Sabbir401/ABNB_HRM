<template>
  <div class="container mt-5">
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
        <router-link class="nav-link" active-class="active" to="/professonal"
          >Professional Information</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/official"
          >Official Information</router-link
        >
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.nav-link active {
  background-color: #007bff;
}
</style>
