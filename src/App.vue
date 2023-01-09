<script setup lang="ts">
import LoginForm from "./components/LoginForm.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <LoginForm msg="message" />
</template>

<style>
body {
  background-color: lightblue;
  margin: 0;
  padding: 0;
}

* {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
