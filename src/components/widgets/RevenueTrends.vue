<template>
  <div class="widget revenue">
    <div class="title">Revenue Trends</div>

    <div v-if="store.showLoader">
      <Loader />
    </div>
    <div v-else>
      <LineChart
        :chartData="chartData"
        :options="options"
        ref="lineChartRef"
        style="height: 255px"
      />
      <div class="tooltip-container" ref="tooltipContainer"></div>

      <div class="background-revenue"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watchEffect } from "vue";
import { LineChart } from "vue-chart-3";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { useStore } from "@/store";
import Loader from "@/components/LoaderWidget.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const store = useStore();

Chart.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const tooltipContainer = ref(null);
const lineChartRef = ref(null);

const chartData = ref({});
const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: false,
      external: customTooltipHandler,
    },
  },
  scales: {
    x: {
      display: true,
      grid: { display: false },
    },
    y: {
      display: false,
      grid: { display: false },
      min: 0,
      max: 700,
    },
  },
});

watchEffect(() => {
  if (props.data && props.data.length > 0) {
    chartData.value = {
      labels: props.data.map((item) => item.title),
      datasets: [
        {
          label: "Data",
          data: props.data.map((item) => item.value),
          borderColor: "#000",
          backgroundColor: "#000",
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
        },
      ],
    };

    setTimeout(() => {
      if (lineChartRef.value) {
        customTooltipHandler();
      }
    }, 500);
  }
});

const colors = [
  "#2670AF",
  "#6AD2FF",
  "#7093CB",
  "#E5ADB8",
  "#FFE53D",
  "#ACEA85",
  "#FD9089",
];

function customTooltipHandler() {
  const tooltipEl = tooltipContainer.value;
  if (!tooltipEl || !lineChartRef.value) return;

  const chartInstance = lineChartRef.value.chartInstance;
  if (!chartInstance) return;

  const dataset = chartInstance.config._config.data.datasets[0];
  const meta = chartInstance.getDatasetMeta(0);

  while (tooltipEl.firstChild) {
    tooltipEl.firstChild.remove();
  }

  dataset.data.forEach((value, index) => {
    const position = meta.data[index].tooltipPosition();

    if (!position) return;

    const tooltipDiv = document.createElement("div");
    tooltipDiv.classList.add("chart-tooltip");

    tooltipDiv.style.left = `${position.x + 15}px`;
    tooltipDiv.style.top = `${position.y - value / 30 + 70}px`;
    tooltipDiv.style.position = "absolute";

    const tooltipColor = colors[index];
    tooltipDiv.style.backgroundColor = tooltipColor;

    tooltipDiv.innerHTML = value;

    tooltipEl.appendChild(tooltipDiv);
  });
}
</script>

<style lang="scss">
#line-chart {
  position: relative;
  z-index: 1;
}

.tooltip-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.background-revenue {
  position: absolute;
  top: 65px;
  left: 0px;
  width: 100%;
  height: 210px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(244, 254, 243, 1) 50%,
    rgba(239, 248, 255, 1) 50%
  );
  z-index: 0;
}

.chart-tooltip {
  background-color: #fd9089;
  color: white;
  display: flex;
  width: 29px;
  height: 21px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  font-size: 10px;
  pointer-events: none;
  white-space: nowrap;
  transform: translate(-50%, -100%);
}
</style>
