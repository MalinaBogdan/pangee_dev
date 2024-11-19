<template>
  <BaseHeader />
  <GridLayout />
</template>

<script>
import GridLayout from "./components/GridLayout.vue";
import BaseHeader from "./components/BaseHeader.vue";

export default {
  name: "App",
  components: {
    GridLayout,
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
</style>
