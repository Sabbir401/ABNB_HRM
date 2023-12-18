<template>
  <!-- <div class="container mt-5">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div> -->

  <div class="container mt-5">
    <div>
        <router-link to = "/employee">Employee Information</router-link> |
        <router-link to = "/personal">Personal Information</router-link> |
    </div>

    <router-view></router-view>
  </div>

</template>
