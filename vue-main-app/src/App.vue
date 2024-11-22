<template>
  <div>
    <Home></Home>
    <div class="header">
      <router-link to="/reactApp">ReactRule</router-link>&nbsp;
      <router-link to="/HelloWorld">HelloWorld</router-link>
    </div>
    <div id="childApp"></div>
  </div>
</template>

<script setup>
import Home from "./views/Home.vue";
</script>

<style scoped>
.header {
  text-align: center;
  cursor: pointer;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
