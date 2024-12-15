<template>
  <div class="ecommerce-wrap">
    <div class="dialog-arrow"></div>
    <div class="left">
      <div class="item" v-for="(item, i) in ecommerceData" :key="i">
        <div class="title">{{ item.title }}</div>
        <div class="name" v-for="(name, i) in item.items" :key="i">
          <RouterLink
            :to="{ path: '/ecommerce' + i }"
            @click="store.openMenu = ''"
          >
            {{ name }}
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">Top Selling Products</div>
      <div class="imgs">
        <div class="img" v-for="(img, i) in imgs" :key="i">
          <img :src="img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EcoomerceImg1 from "@/assets/images/ecommerce1.png";
import EcoomerceImg2 from "@/assets/images/ecommerce2.png";
import EcoomerceImg3 from "@/assets/images/ecommerce3.png";
import EcoomerceImg4 from "@/assets/images/ecommerce4.png";
import EcoomerceImg5 from "@/assets/images/ecommerce5.png";
import EcoomerceImg6 from "@/assets/images/ecommerce6.png";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

const router = useRouter();
const path = router.currentRoute.value.path;

const store = useStore();

let colorArrow = "";

function selectColorArrow() {
  if (
    path === "/" ||
    path === "/publishers" ||
    path.includes("/internal") ||
    path === "/open-source"
  ) {
    colorArrow = "#e6ede8";
  } else if (path === "/financials") {
    colorArrow = "#e4ebe7";
  } else {
    colorArrow = "";
  }
}

selectColorArrow();

const ecommerceData = ref([
  {
    title: "Ready to wear",
    items: [
      "Dresses",
      "Skirts",
      "Top",
      "Pants",
      "Knitwears",
      "Coats & Jackets",
    ],
  },
  {
    title: "Accessories",
    items: [
      "Bags",
      "SLG",
      "Belts",
      "Tech",
      "Luggage and Trunks",
      "Bathing Suit",
    ],
  },
  {
    title: "Shoes",
    items: ["Heels", "Flats", "Sneakers", "Sandals", "Loafers", "CBoots"],
  },
  {
    title: "Jewelry",
    items: ["Fashion Jewelry", "Fine Jewelry", "Watch"],
  },
  {
    title: "Home",
    items: ["Books", "Decor", "Furniture"],
  },
  {
    title: "Beauty",
    items: ["Fragrance", "Color", "Cosmetics", "Skincare"],
  },
]);

const imgs = ref([
  EcoomerceImg1,
  EcoomerceImg2,
  EcoomerceImg3,
  EcoomerceImg4,
  EcoomerceImg5,
  EcoomerceImg6,
]);
</script>

<style scoped>
.dialog-arrow {
  position: absolute;
  top: -11px;
  left: 925px;
  z-index: 7;
  width: 23px;
  height: 23px;
  border-radius: 5px;
  transform: rotate(315deg);
  border-top: 1px solid white;
  border-right: 1px solid white;
  background-color: v-bind(colorArrow);
}
</style>
