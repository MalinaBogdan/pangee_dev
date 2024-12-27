<template>
  <div class="widget">
    <div class="top-string">
      <div class="svg-price-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M7.5 1.40625C6.29477 1.40625 5.11661 1.76364 4.1145 2.43323C3.11238 3.10282 2.33133 4.05454 1.87011 5.16802C1.40889 6.28151 1.28821 7.50676 1.52334 8.68883C1.75847 9.8709 2.33884 10.9567 3.19107 11.8089C4.0433 12.6612 5.1291 13.2415 6.31117 13.4767C7.49324 13.7118 8.71849 13.5911 9.83198 13.1299C10.9455 12.6687 11.8972 11.8876 12.5668 10.8855C13.2364 9.88339 13.5938 8.70523 13.5938 7.5C13.592 5.88436 12.9495 4.33538 11.8071 3.19295C10.6646 2.05052 9.11564 1.40796 7.5 1.40625ZM7.5 12.6562C6.48019 12.6562 5.48328 12.3538 4.63534 11.7873C3.7874 11.2207 3.12651 10.4154 2.73625 9.47321C2.34598 8.53103 2.24387 7.49428 2.44283 6.49407C2.64178 5.49385 3.13287 4.5751 3.85398 3.85398C4.5751 3.13287 5.49385 2.64178 6.49407 2.44283C7.49428 2.24387 8.53103 2.34598 9.47321 2.73625C10.4154 3.12651 11.2207 3.7874 11.7873 4.63534C12.3538 5.48328 12.6563 6.48019 12.6563 7.5C12.6547 8.86705 12.111 10.1777 11.1443 11.1443C10.1777 12.111 8.86705 12.6547 7.5 12.6562ZM9.84375 8.67188C9.84375 9.107 9.6709 9.5243 9.36323 9.83197C9.05555 10.1396 8.63825 10.3125 8.20313 10.3125H7.96875V10.7812C7.96875 10.9056 7.91937 11.0248 7.83146 11.1127C7.74355 11.2006 7.62432 11.25 7.5 11.25C7.37568 11.25 7.25645 11.2006 7.16855 11.1127C7.08064 11.0248 7.03125 10.9056 7.03125 10.7812V10.3125H6.09375C5.96943 10.3125 5.8502 10.2631 5.7623 10.1752C5.67439 10.0873 5.625 9.96807 5.625 9.84375C5.625 9.71943 5.67439 9.6002 5.7623 9.51229C5.8502 9.42439 5.96943 9.375 6.09375 9.375H8.20313C8.38961 9.375 8.56845 9.30092 8.70031 9.16906C8.83217 9.0372 8.90625 8.85836 8.90625 8.67188C8.90625 8.48539 8.83217 8.30655 8.70031 8.17469C8.56845 8.04283 8.38961 7.96875 8.20313 7.96875H6.79688C6.36176 7.96875 5.94446 7.7959 5.63678 7.48822C5.3291 7.18055 5.15625 6.76325 5.15625 6.32812C5.15625 5.893 5.3291 5.4757 5.63678 5.16803C5.94446 4.86035 6.36176 4.6875 6.79688 4.6875H7.03125V4.21875C7.03125 4.09443 7.08064 3.9752 7.16855 3.88729C7.25645 3.79939 7.37568 3.75 7.5 3.75C7.62432 3.75 7.74355 3.79939 7.83146 3.88729C7.91937 3.9752 7.96875 4.09443 7.96875 4.21875V4.6875H8.90625C9.03057 4.6875 9.1498 4.73689 9.23771 4.82479C9.32562 4.9127 9.375 5.03193 9.375 5.15625C9.375 5.28057 9.32562 5.3998 9.23771 5.48771C9.1498 5.57561 9.03057 5.625 8.90625 5.625H6.79688C6.6104 5.625 6.43155 5.69908 6.29969 5.83094C6.16783 5.9628 6.09375 6.14164 6.09375 6.32812C6.09375 6.51461 6.16783 6.69345 6.29969 6.82531C6.43155 6.95717 6.6104 7.03125 6.79688 7.03125H8.20313C8.63825 7.03125 9.05555 7.2041 9.36323 7.51178C9.6709 7.81945 9.84375 8.23675 9.84375 8.67188Z"
            fill="#343330"
          />
        </svg>
      </div>

      <div class="title">Revenue vs Data Spend</div>
    </div>
    <div class="bar">
      <BarChart
        :chartData="data"
        :options="options"
        :plugins="[customLabelsPlugin]"
      />
      <BarChart
        class="barchart-second"
        :chartData="data2"
        :options="options"
        :plugins="[customLabelsPlugin2]"
      />
    </div>
    <div class="labels">
      <div
        class="label"
        v-for="(label, i) in props.size == 'small'
          ? dataSmall.lebels
          : datMedium.lebels"
        :key="i"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { BarChart } from "vue-chart-3";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const props = defineProps({
  size: {
    type: String,
    default: "medium",
  },
});

const dataSmall = {
  lebels: ["1/3", "2/4", "1/4", "3/4", "2/2 ", "2/3", "2/4"],
  data: [40, 20, 30, 21, 14, 38, 20, 35],
};

const datMedium = {
  lebels: [
    "1/3",
    "2/4",
    "1/4",
    "3/4",
    "2/2 ",
    "2/3",
    "2/4",
    "1/3",
    "2/4",
    "1/4",
    "3/4",
    "2/2 ",
    "2/3",
  ],
  data: [40, 20, 30, 21, 14, 38, 20, 35, 27, 16, 34, 21, 26],
};

const customLabelsPlugin = {
  id: "customLabels",
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx;

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);

      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        const { x, y } = bar.tooltipPosition();
        let barHeight;

        if (typeof bar.base === "undefined") {
          const yScale = chart.scales.y || {};
          const yBase = yScale.bottom || chart.height;
          barHeight = yBase - y;
        } else {
          barHeight = bar.base - y;
        }

        ctx.save();
        ctx.font = "10px";
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(value, x, y + barHeight / 4);
        ctx.restore();
      });
    });
  },
};

const customLabelsPlugin2 = {
  id: "customLabels",
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx;

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);

      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        const { x, y } = bar.tooltipPosition();
        let barHeight;

        if (typeof bar.base === "undefined") {
          const yScale = chart.scales.y || {};
          const yBase = yScale.bottom || chart.height;
          barHeight = yBase - y;
        } else {
          barHeight = bar.base - y;
        }

        ctx.save();
        ctx.font = "10px";
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(value, x, y + barHeight / 2);
        ctx.restore();
      });
    });
  },
};

const data = ref({
  labels: props.size == "small" ? dataSmall.lebels : datMedium.lebels,
  datasets: [
    {
      label: "Sales",
      data: props.size == "small" ? dataSmall.data : datMedium.data,
      backgroundColor: "#6AD2FF",
      borderRadius: 25,
      borderSkipped: false,
      barThickness: 30,
    },
  ],
});

const data2 = ref({
  labels: props.size == "small" ? dataSmall.lebels : datMedium.lebels,
  datasets: [
    {
      label: "Sales2",
      data: props.size == "small" ? dataSmall.data : datMedium.data,
      backgroundColor: "#FD9089",
      borderRadius: 25,
      borderSkipped: false,
      barThickness: 30,
    },
  ],
});

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    customLabels: {},
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
});
</script>

<style lang="scss">
.widget .bar {
  margin-top: 20px;
  height: 150px;
  position: relative;

  canvas {
    width: 100% !important;
    height: 150px !important;
  }
}
.barchart-second {
  position: absolute !important;
  bottom: 0%;
  width: 100%;
  height: 75px !important;
}

.labels {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  font-size: 10px;
}
</style>
