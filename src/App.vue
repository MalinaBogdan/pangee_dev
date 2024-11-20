<template>
  <div class="app">
    <BaseHeader />
    <RouterView />
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
    BaseHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");

html {
  background-color: #e3ece7;
}

#app {
  font-family: "Work Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
}
a {
  color: black;
  text-decoration: none;
}
</style>
