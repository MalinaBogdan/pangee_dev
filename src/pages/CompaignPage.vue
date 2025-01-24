<template>
  <div class="compaign-page">
    <div class="content">
      <div class="left">
        <div class="menu">
          <div class="title">
            <div class="block"></div>
            Quick Menu
          </div>
          <div class="item">Campaign ></div>
          <div class="item">Publishers</div>
          <div class="item">Performance</div>
          <div class="item">Products</div>
          <div class="item">Media</div>
          <div class="separator"></div>
        </div>

        <FilterMain />
      </div>
      <div class="right">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import FilterMain from "@/components/FiltersMain";
import DataSpend from "@/components/widgets/DataSpend.vue";
import TopProduct from "@/components/widgets/TopProduct.vue";
import TopKeywords from "@/components/widgets/TopKeywords.vue";
import QuickOverView from "@/components/widgets/QuickOverView.vue";
import CategoriesTrend from "@/components/widgets/CategoriesTrend.vue";
import RevenueTrends from "@/components/widgets/RevenueTrends.vue";

import draggable from "vuedraggable";

import apiClient from "@/services/api";
import { useStore } from "@/store";

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

const store = useStore();

onMounted(async () => {
  store.showLoader = true;
  apiClient.get("/api/dashboard/2c1d233b-5aad-465c-82c8-6921067ae368").then((data) => {
    widgets.value = data.data.widgets;

    console.log(widgets.value, "widgets.value");

    widgets.value?.forEach((element) => {
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
});

let list1 = ref([
  { id: 1, component: RevenueTrends, props: { data: revenueTrendsData } },
  { id: 2, component: DataSpend, props: { data: revenueDataSpendData } },
  { id: 3, component: TopProduct, props: { data: topProductsData } },
  { id: 4, component: TopKeywords, props: { data: topKeywordsData } },
]);

let list2 = ref([
  {
    id: 1,
    component: QuickOverView,
    props: { data: quickOverviewData },
  },
  { id: 2, component: CategoriesTrend, props: { data: categoriesTrendData } },
  { id: 3, component: RevenueTrends, props: { data: revenueTrendsData } },
]);
</script>

<style></style>
