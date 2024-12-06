<template>
  <div class="widget">
    <div class="title">Top Keywords</div>
    <div class="list">
      <div class="name">
        <div class="header">Keyword name</div>
        <div class="value" v-for="(list, i) in lists" :key="i">
          {{ list.name }}
        </div>
      </div>
      <div class="volume">
        <div class="header">Volume</div>
        <div class="value" v-for="(list, i) in lists" :key="i">
          {{ list.volumeName }}
        </div>
      </div>
      <div class="keywords">
        <div class="header">Keywords</div>
        <div class="value" v-for="(list, i) in lists" :key="i">
          {{ list.keyword }}
        </div>
      </div>
      <div class="volume">
        <div class="header">Volume</div>
        <div class="value" v-for="(list, i) in lists" :key="i">
          {{ list.volume }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const lists = ref([
  { name: "Bags", volumeName: "432", keyword: "Formal Suit", volume: "12" },
  { name: "Lady Shoes", volumeName: "432", keyword: "Dressing", volume: "12" },
  { name: "Gucci Bag", volumeName: "432", keyword: "Clothing", volume: "12" },
  { name: "Belt", volumeName: "432", keyword: "Leather bag", volume: "12" },
  { name: "Armani Shirt", volumeName: "432", keyword: "258", volume: "12" },
]);
</script>

<style lang="scss"></style>
