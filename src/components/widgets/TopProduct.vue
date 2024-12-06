<template>
  <div class="widget">
    <div class="title">Top Products</div>

    <div class="products">
      <div class="product" v-for="(product, i) in products" :key="i">
        <img :src="product" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/product2.png";
import product3 from "@/assets/images/product3.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";
import product6 from "@/assets/images/product6.png";

const products = ref([
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
]);
</script>

<style lang="scss"></style>
