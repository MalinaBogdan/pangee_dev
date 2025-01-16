<template>
  <div class="widget quick">
    <div class="title">Quick OverView</div>

    <div class="row" v-for="(field, i) in props.data" :key="i">
      <div class="left">{{ field.title }}</div>
      <div class="right">
        {{ field.value }}
        <div class="time" v-if="field.title == 'Average Time on Page'">sec</div>
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
