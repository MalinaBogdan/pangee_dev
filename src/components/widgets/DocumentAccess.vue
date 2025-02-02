<template>
  <div class="widget green">
    <div class="title">
      <p
        :style="{ fontSize: props.title.fontSize + 'px' }"
        v-for="(paragraph, i) in props.title.text"
        :key="i"
      >
        {{ paragraph }}
      </p>
    </div>

    <div v-if="store.showLoader">
      <Loader />
    </div>

    <div v-else v-for="(section, i) in props.data.sections" :key="i">
      <div class="grey-text mt40">{{ section.title }}</div>

      <div class="row" v-for="(doc, i) in section.documents" :key="i">
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

        <p>{{ doc.title }}</p>
        <div class="slider-container">
          <VueSlider
            v-model="doc.value"
            :tooltips="true"
            tooltip="always"
            :tooltipFormatter="() => `${doc.value}%`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import VueSlider from "vue-3-slider-component";
import Loader from "@/components/LoaderWidget.vue";
import { useStore } from "@/store";

const props = defineProps({
  title: {
    type: Object,
  },
  data: {
    type: Array,
  },
});

const store = useStore();
</script>

<style lang="scss">
.slider-container {
  width: 440px;
}

.vue-slider-rail {
  height: 14px !important;
}

.vue-slider-dot {
  width: 18px !important;
  height: 36px !important;
  background: #f4fef3 !important;
  display: flex !important;
  justify-content: center !important;
}

.vue-slider-dot-handle {
  width: 10px !important;
  border-radius: 10px !important;
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
  width: 28px !important;
  height: 23px !important;
  border-radius: 10px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.vue-slider-dot-tooltip {
  visibility: visible !important;
}

.vue-slider-dot-tooltip-inner-top:after {
  display: none !important;
}

.vue-slider-dot-tooltip-text {
  font-size: 10px !important;
  padding: 0 !important;
}

.vue-slider-dot-handle {
  background-color: #7093cb !important;
  border: none !important;
  box-shadow: none !important;
}

.vue-slider.vue-slider-ltr {
  height: auto !important;
}
</style>
