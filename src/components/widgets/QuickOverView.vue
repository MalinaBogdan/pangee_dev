<template>
  <div class="widget quick">
    <div class="title">Quick OverView</div>
    <div class="row mt40">
      <div class="left">Total Page Views</div>
      <div class="right">
        {{ data.total }}
      </div>
    </div>
    <div class="row">
      <div class="left">Unique Visitors</div>
      <div class="right">
        {{ data.iniqVisitors }}
      </div>
    </div>
    <div class="row">
      <div class="left">Average Time on Page</div>
      <div class="right">
        {{ data.averageTime }}
        <div class="time">sec</div>
      </div>
    </div>
    <div class="row">
      <div class="left">Total Pages Saved</div>
      <div class="right">
        {{ data.totalPages }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
  total: "2,249",
  iniqVisitors: "429",
  averageTime: "83",
  totalPages: "129",
});
</script>

<style lang="scss"></style>
