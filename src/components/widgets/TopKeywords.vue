<template>
  <div class="widget">
    <div class="title">Top Keywords</div>
    <div v-if="store.showLoader">
      <Loader />
    </div>
    <div v-else class="list">
      <div class="name">
        <div class="header">Keyword name</div>
        <div class="value" v-for="(list, i) in dataLeft" :key="i">
          {{ list.title }}
        </div>
      </div>
      <div class="volume">
        <div class="header">Volume</div>
        <div class="value" v-for="(list, i) in dataLeft" :key="i">
          {{ list.volume }}
        </div>
      </div>
      <div class="keywords">
        <div class="header">Keywords name</div>
        <div class="value" v-for="(list, i) in dataRight" :key="i">
          {{ list.title }}
        </div>
      </div>
      <div class="volume">
        <div class="header">Volume</div>
        <div class="value" v-for="(list, i) in dataRight" :key="i">
          {{ list.volume }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watchEffect } from "vue";
import { useStore } from "@/store";
import Loader from "@/components/LoaderWidget.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});

const store = useStore();

const dataLeft = ref();
const dataRight = ref();

watchEffect(() => {
  if (props.data && props.data.length > 0) {
    const middleIndex = Math.ceil(props.data.length / 2);

    dataLeft.value = props.data.slice(0, middleIndex);
    dataRight.value = props.data.slice(middleIndex);
  }
});
</script>

<style lang="scss"></style>
