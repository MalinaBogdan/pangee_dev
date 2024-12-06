<template>
  <div class="open-source">
    <FiltersDoc />
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
import FiltersDoc from "@/components/FiltersDoc.vue";
import draggable from "vuedraggable";

import QuickOverView from "@/components/widgets/QuickOverView.vue";
import CategoriesTrend from "@/components/widgets/CategoriesTrend.vue";
import DocumentAccess from "@/components/widgets/DocumentAccess.vue";

let list = ref([{ id: 2, component: DocumentAccess }]);

let list2 = ref([
  { id: 5, component: QuickOverView },
  { id: 6, component: CategoriesTrend },
]);
</script>

<style>
</style>
