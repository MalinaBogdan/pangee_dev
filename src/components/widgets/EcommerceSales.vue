<template>
  <div class="widget">
    <div class="grey-text">Ecommerce Sales</div>

    <div class="price">{{ props.data.value }}</div>
    <div class="bot-text">
      <div class="percent">{{ props.data.delta }}</div>
      <div class="text">since last month</div>
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
