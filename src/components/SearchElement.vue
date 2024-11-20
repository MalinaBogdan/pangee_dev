<template>
  <div class="search-wrap">
    <div class="dialog-arrow"></div>

    <input type="text" placeholder="Enter Search Here" />
    <div class="content">
      <div class="item" v-for="(item, i) in data" :key="i">
        <div class="title">{{ item.title }}</div>
        <div class="elements">
          <div class="element" v-for="(el, i) in item.elements" :key="i">
            {{ el }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    title: "Team",
    elements: [
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
    ],
  },
  {
    title: "Talent",
    elements: [
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
    ],
  },
  {
    title: "Theme",
    elements: [
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
    ],
  },
  {
    title: "Brand",
    elements: [
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
    ],
  },
  {
    title: "Location",
    elements: [
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
    ],
  },
  {
    title: "Publisher",
    elements: [
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
      "Member",
    ],
  },
]);
</script>

<style scoped>
.dialog-arrow {
  position: absolute;
  top: 45px;
  right: -25px;
  z-index: 7;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  transform: rotate(45deg);
  border-top: 1px solid white;
  border-right: 1px solid white;
  background: linear-gradient(
    45deg,
    rgba(208, 213, 224, 0) 43%,
    rgba(176, 182, 208, 1) 47%
  );
}
</style>
