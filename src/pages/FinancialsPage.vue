<template>
  <div class="financials">
    <FiltersMain />
    <div class="col-center">
      <draggable
        class="list-group"
        :list="list"
        group="people1"
        @change="log"
        itemKey="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            <component
              :is="element.component"
              :key="element.id"
              v-bind="element.props || {}"
            />
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-side">
      <draggable
        class="list-group"
        :list="list2"
        group="widget-side"
        @change="log"
        itemKey="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            <component
              :is="element.component"
              :key="element.id"
              v-bind="element.props || {}"
            />
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FiltersMain from "@/components/FiltersMain.vue";
import draggable from "vuedraggable";

import TopKeywords from "@/components/widgets/TopKeywords.vue";
import DataSpend from "@/components/widgets/DataSpend.vue";
import QuickOverView from "@/components/widgets/QuickOverView.vue";
import CategoriesTrend from "@/components/widgets/CategoriesTrend.vue";
import RevenueTrends from "@/components/widgets/RevenueTrends.vue";

let list = ref([
  { id: 2, component: TopKeywords },
  { id: 2, component: DataSpend, props: { size: "large" } },
]);

let list2 = ref([
  { id: 5, component: QuickOverView },
  { id: 6, component: CategoriesTrend },
  { id: 7, component: RevenueTrends },
]);
</script>

<style>
</style>
