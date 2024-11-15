<template>
  <div class="widget green">
    <div class="title">
      Document <br />
      Access
    </div>

    <div class="grey-text mt40">Trending Internal documents</div>

    <div class="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5M8 13H12M8 17H16M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>Document name</p>
      <div class="slider-container">
        <VueSlider
          v-model="value"
          :tooltips="true"
          tooltip="always"
          :tooltipFormatter="() => `${value}%`"
        />
      </div>
    </div>
    <div class="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5M8 13H12M8 17H16M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>Document name</p>
      <div class="slider-container">
        <VueSlider
          v-model="value"
          :tooltips="true"
          tooltip="always"
          :tooltipFormatter="() => `${value}%`"
        />
      </div>
    </div>
    <div class="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5M8 13H12M8 17H16M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>Document name</p>
      <div class="slider-container">
        <VueSlider
          v-model="value"
          :tooltips="true"
          tooltip="always"
          :tooltipFormatter="() => `${value}%`"
        />
      </div>
    </div>
    <div class="grey-text mt20">Trending Internal documents</div>
    <div class="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5M8 13H12M8 17H16M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>Document name</p>
      <div class="slider-container">
        <VueSlider
          v-model="value"
          :tooltips="true"
          tooltip="always"
          :tooltipFormatter="() => `${value}%`"
        />
      </div>
    </div>

    <div class="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5M8 13H12M8 17H16M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>Document name</p>
      <div class="slider-container">
        <VueSlider
          v-model="value"
          :tooltips="true"
          tooltip="always"
          :tooltipFormatter="() => `${value}%`"
        />
      </div>
    </div>
    <div class="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5M8 13H12M8 17H16M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>Document name</p>
      <div class="slider-container">
        <VueSlider
          v-model="value"
          :tooltips="true"
          tooltip="always"
          :tooltipFormatter="() => `${value}%`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueSlider from "vue-3-slider-component";

const value = ref(60);
// const data = ref([45, 51, 70, 65]);
</script>

<style lang="scss">
.slider-container {
  width: 440px;
}

.vue-slider-rail {
  height: 14px;
}

.vue-slider-dot {
  width: 18px !important;
  height: 36px !important;
  background: #f4fef3;
  display: flex;
  justify-content: center;
}

.vue-slider-dot-handle {
  width: 10px !important;
  border-radius: 10px;
}

.vue-slider-rail {
  background: linear-gradient(
    80deg,
    rgba(172, 234, 133, 1) 0%,
    rgba(253, 144, 137, 1) 30%,
    rgba(255, 229, 61, 1) 60%,
    rgba(172, 234, 133, 1) 81%,
    rgba(229, 173, 184, 1) 100%
  ) !important;
}

.vue-slider-process {
  background: rgba(255, 0, 0, 0) !important;
}

.vue-slider-dot-tooltip-inner {
  background: #fd9089 !important;
  width: 28px;
  height: 23px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-slider-dot-tooltip {
  visibility: visible;
}

.vue-slider-dot-tooltip-inner-top:after {
  display: none;
}

.vue-slider-dot-tooltip-text {
  font-size: 10px;
  padding: 0;
}

.vue-slider-dot-handle {
  background-color: #7093cb;
  border: none;
  box-shadow: none;
}

.vue-slider.vue-slider-ltr {
  height: auto !important;
}
</style>
