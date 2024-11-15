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
            <component :is="element.component" :key="element.id" />
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
            <component :is="element.component" :key="element.id" />
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
            <component :is="element.component" :key="element.id" />
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
import EcommerceSales from "./EcommerceSales.vue";
import DataSpend from "./DataSpend.vue";
import AmountSpend from "./AmountSpend.vue";
import TopProduct from "./TopProduct.vue";
import DocumentAccess from "./DocumentAccess.vue";
import TopKeywords from "./TopKeywords.vue";
import QuickOverView from "./QuickOverView.vue";
import CategoriesTrend from "./CategoriesTrend.vue";
import RevenueTrends from "./RevenueTrends.vue";

let list1 = ref([
  { id: 1, component: EcommerceSales },
  { id: 2, component: DataSpend },
  { id: 3, component: AmountSpend },
  { id: 4, component: TopProduct },
]);

let list2 = ref([
  { id: 1, component: DocumentAccess },
  { id: 2, component: TopKeywords },
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
