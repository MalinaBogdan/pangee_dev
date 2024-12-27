<template>
  <div class="row">
    <div class="col-side">
      <draggable
        class="list-group"
        :list="list1"
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

    <div class="col-center">
      <draggable
        class="list-group"
        :list="list2"
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
        :list="list3"
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

    <rawDisplayer class="col-3" :value="list1" title="List 1" />
    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

import EcommerceSales from "@/components/widgets/EcommerceSales.vue";
import DataSpend from "@/components/widgets/DataSpend.vue";
import AmountSpend from "@/components/widgets/AmountSpend.vue";
import TopProduct from "@/components/widgets/TopProduct.vue";
import DocumentAccess from "@/components/widgets/DocumentAccess.vue";
import TopKeywords from "@/components/widgets/TopKeywords.vue";
import QuickOverView from "@/components/widgets/QuickOverView.vue";
import CategoriesTrend from "@/components/widgets/CategoriesTrend.vue";
import RevenueTrends from "@/components/widgets/RevenueTrends.vue";

let list1 = ref([
  { id: 1, component: EcommerceSales },
  { id: 3, component: AmountSpend },
  { id: 4, component: TopProduct },
]);

let list2 = ref([
  {
    id: 1,
    component: DocumentAccess,
    props: { title: { text: [" Document", "Access"], fontSize: "36" } },
  },
  { id: 2, component: DataSpend, props: { size: "large" } },
  { id: 3, component: TopKeywords },
]);

let list3 = ref([
  { id: 5, component: QuickOverView },
  { id: 6, component: CategoriesTrend },
  { id: 7, component: RevenueTrends },
]);
</script>

<style>
.row {
  display: flex;
  margin: auto;
  width: fit-content;
  column-gap: 5px;
}

.col-side {
  width: 350px;
  border-radius: 20px;
}

.col-center {
  width: 700px;
}
</style>
