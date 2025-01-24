<template>
  <div class="widget articles">
    <div class="title">Top Articles Used</div>

    <div class="row" v-for="(field, i) in props.data" :key="i">
      <div class="left">{{ field.title }}</div>
      <div class="right">
        {{ field.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style lang="scss"></style>
