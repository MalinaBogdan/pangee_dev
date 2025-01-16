<template>
  <div class="widget">
    <div class="title">Top Products</div>

    <div v-if="store.showLoader">
      <Loader />
    </div>

    <div v-else class="products">
      <div class="product" v-for="(product, i) in props.data" :key="i">
        <img :src="product.imageUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "@/store";
import Loader from "@/components/LoaderWidget.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const store = useStore();
</script>

<style lang="scss"></style>
