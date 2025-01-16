<template>
  <div class="widget pie">
    <div class="title">Categories Trend</div>
    <div v-if="store.showLoader">
      <Loader />
    </div>

    <div v-else>
      <div class="pie-chart">
        <PieChart :chartData="chartData" :options="chartOptions" />
      </div>

      <div class="labels">
        <div class="label" v-for="(label, i) in props.data" :key="i">
          <div class="top">
            <div class="color" :style="{ backgroundColor: colors[i] }"></div>
            <div class="name">{{ label.title }}</div>
          </div>
          <div class="percent">{{ label.value }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watchEffect } from "vue";
import { PieChart } from "vue-chart-3";
import { useStore } from "@/store";
import Loader from "@/components/LoaderWidget.vue";

const props = defineProps({
  data: {
    type: Array,
  },
});

const store = useStore();

const colors = [
  "#2670AF",
  "#6AD2FF",
  "#7093CB",
  "#E5ADB8",
  "#FFE53D",
  "#ACEA85",
  "#FD9089",
];

const chartData = ref({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: colors,
      borderWidth: 0,
    },
  ],
});

watchEffect(() => {
  if (props.data && props.data.length > 0) {
    chartData.value = {
      labels: props.data.map((item) => item.title),
      datasets: [
        {
          data: props.data.map((item) => item.value),
          backgroundColor: colors.slice(0, props.data.length),
          borderWidth: 0,
        },
      ],
    };
  }
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
