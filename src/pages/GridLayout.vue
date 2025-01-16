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
import { ref, onMounted } from "vue";
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
import apiClient from "@/services/api";
import { useStore } from "@/store";

const store = useStore();

let widgets = ref({});
let ecommerceSalesData = ref({});
let documentAccessData = ref({});
let quickOverviewData = ref({});
let amountSpendData = ref({});
let categoriesTrendData = ref({});
let topProductsData = ref({});
let revenueDataSpendData = ref({});
let revenueTrendsData = ref({});
let topKeywordsData = ref({});

onMounted(async () => {
  store.showLoader = true;

  try {
    apiClient.get("/api/dashboard/2c1d233b-5aad-465c-82c8-6921067ae368").then((data) => {
      console.log(data, "data");

      widgets.value = data.data.widgets;

      widgets.value.forEach((element) => {
        switch (element.type) {
          case "ecommerce-sales":
            ecommerceSalesData.value = element.data;
            break;
          case "document-access":
            documentAccessData.value = element.data;
            break;
          case "quick-overview":
            quickOverviewData.value = element.data;
            break;
          case "amount-spend":
            amountSpendData.value = element.data;
            break;
          case "categories-trend":
            categoriesTrendData.value = element.data;
            break;
          case "top-products":
            topProductsData.value = element.data;
            break;
          case "revenue-vs-data-spend":
            revenueDataSpendData.value = element.data;
            break;
          case "revenue-trends":
            revenueTrendsData.value = element.data;
            break;
          case "top-keywords":
            topKeywordsData.value = element.data;
            break;

          default:
            break;
        }
      });

      store.showLoader = false;
    });
  } catch (error) {
    console.log(error, "error");
  }
});

let list1 = ref([
  { id: 1, component: EcommerceSales, props: { data: ecommerceSalesData } },
  { id: 3, component: AmountSpend, props: { data: amountSpendData } },
  { id: 4, component: TopProduct, props: { data: topProductsData } },
]);

let list2 = ref([
  {
    id: 1,
    component: DocumentAccess,
    props: {
      title: { text: [" Document", "Access"], fontSize: "36" },
      data: documentAccessData,
    },
  },
  { id: 2, component: DataSpend, props: { data: revenueDataSpendData } },
  { id: 3, component: TopKeywords, props: { data: topKeywordsData } },
]);

let list3 = ref([
  { id: 5, component: QuickOverView, props: { data: quickOverviewData } },
  { id: 6, component: CategoriesTrend, props: { data: categoriesTrendData } },
  { id: 7, component: RevenueTrends, props: { data: revenueTrendsData } },
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
