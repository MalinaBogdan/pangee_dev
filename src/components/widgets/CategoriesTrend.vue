<template>
  <div class="widget pie">
    <div class="title">Categories Trend</div>

    <div class="pie-chart">
      <PieChart :chartData="chartData" :options="chartOptions" />
    </div>

    <div class="labels">
      <div class="label" v-for="(label, i) in labels" :key="i">
        <div class="top">
          <div class="color" :style="{ backgroundColor: colors[i] }"></div>
          <div class="name">{{ label.label }}</div>
        </div>
        <div class="percent">{{ label.percent }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PieChart } from "vue-chart-3";

const colors = [
  "#2670AF",
  "#6AD2FF",
  "#7093CB",
  "#E5ADB8",
  "#FFE53D",
  "#ACEA85",
  "#FD9089",
];

const labels = [
  { label: "Women", percent: 10 },
  { label: "Men", percent: 34 },
  { label: "Acessories", percent: 42 },
  { label: "Beauty", percent: 16 },
  { label: "Home", percent: 22 },
  { label: "Jewelry", percent: 5 },
  { label: "Shoes", percent: 29 },
];

const chartData = ref({
  labels: labels.map((a) => a.label),
  datasets: [
    {
      data: labels.map((a) => a.percent),
      backgroundColor: colors,
      borderWidth: 0,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  events: [],
});
</script>

<style lang="scss"></style>
