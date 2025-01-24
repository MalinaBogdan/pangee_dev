<template>
  <div class="widget grossing">
    <div class="title">Top Grossing Keywords</div>

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
