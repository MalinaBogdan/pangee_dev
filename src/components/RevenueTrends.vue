<template>
  <div class="widget revenue">
    <div class="title">Revenue Trends</div>
    <LineChart
      :chartData="chartData"
      :options="options"
      ref="lineChartRef"
      style="height: 255px"
    />
    <div class="tooltip-container" ref="tooltipContainer"></div>
    <div class="background-revenue"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
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

Chart.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const tooltipContainer = ref(null);
const lineChartRef = ref(null);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Data",
      data: [170, 250, 358, 437, 554],
      borderColor: "#000",
      backgroundColor: "#000",
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
    },
  ],
});

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
    tooltipDiv.style.top = `${position.y + 10}px`;

    tooltipDiv.style.position = "absolute";
    tooltipDiv.innerHTML = value;
    tooltipEl.appendChild(tooltipDiv);
  });
}

onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    if (lineChartRef.value) {
      customTooltipHandler();
    }
  }, 300);
});
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
