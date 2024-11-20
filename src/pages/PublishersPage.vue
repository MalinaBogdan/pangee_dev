<template>
  <div class="publisher">
    <div class="col white">
      <h2 class="title">
        Top grossing <br />
        Publishers
      </h2>
      <div class="item" v-for="(item, i) in topPublishers" :key="i">
        {{ item }}
      </div>
    </div>
    <div class="col white">
      <h2 class="title">
        Top grossing <br />
        Keywords
      </h2>
      <div class="item" v-for="(item, i) in topKeywords" :key="i">
        {{ item }}
      </div>
    </div>
    <div class="col article">
      <h2 class="title">
        Top grossing <br />
        Articles
      </h2>
      <div class="item" v-for="(item, i) in topArticles" :key="i">
        <h4 class="name">{{ item.titleArticle }}</h4>
        <p class="content">{{ item.article }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const topPublishers = ref([
  "Vogue",
  "Conde Nast",
  "Elle",
  "Marie Claire",
  "InStyle",
  "Glamour",
  "Esquire",
]);

const topKeywords = ref([
  "Louis Vuitton",
  "Louis Vuitton luxury",
  "Louis Vuitton fashion",
  "Louis Vuitton exclusivity",
  "Louis Vuitton style",
  "High-end designer",
]);

const topArticles = ref([
  {
    titleArticle: "Pharrell Takes Over as Louis vuitton's Creative Director",
    article:
      "Pharrell's appointment signals a new era for LV, blending music and high fashion to attract a younger audience.",
  },
  {
    titleArticle: "Pharrell Takes Over as Louis vuitton's Creative Director",
    article:
      "Pharrell's appointment signals a new era for LV, blending music and high fashion to attract a younger audience.",
  },
  {
    titleArticle: "Pharrell Takes Over as Louis vuitton's Creative Director",
    article:
      "Pharrell's appointment signals a new era for LV, blending music and high fashion to attract a younger audience.",
  },
]);
</script>

<style>
</style>
