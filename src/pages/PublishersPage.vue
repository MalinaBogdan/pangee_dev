<template>
  <div class="publisher">
    <div class="row">
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
      <div class="col articles">
        <h2 class="title">
          Top grossing <br />
          Articles
        </h2>
        <div
          class="item"
          v-for="(item, i) in topArticles"
          :key="i"
          @click="selectedArticle = item"
        >
          <h4 class="name">{{ item.titleArticle }}</h4>
          <p class="content">{{ item.article }}</p>
        </div>
      </div>
    </div>
    <div class="article" v-if="selectedArticle.content">
      <h4 class="title">{{ selectedArticle.titleArticle }}</h4>
      <div class="info">
        {{ selectedArticle.date }}, WrittenBy: {{ selectedArticle.written }}
      </div>
      <div class="content">
        <div class="img"><img :src="selectedArticle.img" alt="" /></div>
        <div class="text">
          <p
            class="custom-underline"
            v-for="(paragraph, i) in selectedArticle.content"
            :key="i"
          >
            {{ paragraph }}
          </p>
        </div>
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

const selectedArticle = ref({});

const topArticles = ref([
  {
    titleArticle: "Pharrell Takes Over as Louis vuitton's Creative Director",
    article:
      "Pharrell's appointment signals a new era for LV, blending music and high fashion to attract a younger audience.",
    date: "02/12/2023",
    written: "James Dean",
    content: [
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque conubia urna a facilisi et ac? Dignissim nec commodo hac interdum dictum torquent sollicitudin. Nullam eu eros sollicitudin nulla placerat nec sapien.",
      "Aliquet elementum justo tempus sodales mus? Potenti efficitur litora semper vel mi ligula lacus taciti. Consectetur hac tempus viverra orci facilisis tempus aptent suspendisse.",
      "Efficitur curae sem suscipit conubia; consectetur volutpat consequat. Felis vivamus aliquam facilisis cras mauris luctus quis ut dictum. Lacus massa magnis consequat, ligula ultrices quis.",
    ],
    img: "https://pagesix.com/wp-content/uploads/sites/3/2024/10/pharrell-williams-attends-prelude-olympics-91504179.jpg?w=683",
  },
  {
    titleArticle: "Pharrell Takes Over as Louis vuitton's Creative Director",
    article:
      "Pharrell's appointment signals a new era for LV, blending music and high fashion to attract a younger audience.",
    date: "02/12/2023",
    written: "James Dean",
    content: [
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque conubia urna a facilisi et ac? Dignissim nec commodo hac interdum dictum torquent sollicitudin. Nullam eu eros sollicitudin nulla placerat nec sapien.",
      "Aliquet elementum justo tempus sodales mus? Potenti efficitur litora semper vel mi ligula lacus taciti. Consectetur hac tempus viverra orci facilisis tempus aptent suspendisse.",
      "Efficitur curae sem suscipit conubia; consectetur volutpat consequat. Felis vivamus aliquam facilisis cras mauris luctus quis ut dictum. Lacus massa magnis consequat, ligula ultrices quis.",
    ],
    img: "https://pagesix.com/wp-content/uploads/sites/3/2024/10/pharrell-williams-attends-prelude-olympics-91504179.jpg?w=683",
  },
  {
    titleArticle: "Pharrell Takes Over as Louis vuitton's Creative Director",
    article:
      "Pharrell's appointment signals a new era for LV, blending music and high fashion to attract a younger audience.",
    date: "02/12/2023",
    written: "James Dean",
    content: [
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque conubia urna a facilisi et ac? Dignissim nec commodo hac interdum dictum torquent sollicitudin. Nullam eu eros sollicitudin nulla placerat nec sapien.",
      "Aliquet elementum justo tempus sodales mus? Potenti efficitur litora semper vel mi ligula lacus taciti. Consectetur hac tempus viverra orci facilisis tempus aptent suspendisse.",
      "Efficitur curae sem suscipit conubia; consectetur volutpat consequat. Felis vivamus aliquam facilisis cras mauris luctus quis ut dictum. Lacus massa magnis consequat, ligula ultrices quis.",
    ],
    img: "https://pagesix.com/wp-content/uploads/sites/3/2024/10/pharrell-williams-attends-prelude-olympics-91504179.jpg?w=683",
  },
]);
</script>

<style>
</style>
