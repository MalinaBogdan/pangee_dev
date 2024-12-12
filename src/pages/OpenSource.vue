<template>
  <div class="open-source">
    <div class="top-string">
      <div class="add-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.24993 5.25007L17.9999 5.25007C18.1988 5.25007 18.3896 5.32909 18.5303 5.46974C18.6709 5.61039 18.7499 5.80116 18.7499 6.00007L18.7499 15.7501C18.7499 15.949 18.6709 16.1397 18.5303 16.2804C18.3896 16.4211 18.1988 16.5001 17.9999 16.5001C17.801 16.5001 17.6103 16.4211 17.4696 16.2804C17.3289 16.1397 17.2499 15.949 17.2499 15.7501L17.2499 7.81038L6.53055 18.5307C6.38982 18.6714 6.19895 18.7505 5.99993 18.7505C5.80091 18.7505 5.61003 18.6714 5.4693 18.5307C5.32857 18.39 5.24951 18.1991 5.24951 18.0001C5.24951 17.801 5.32857 17.6102 5.4693 17.4694L16.1896 6.75007L8.24993 6.75007C8.05102 6.75007 7.86025 6.67105 7.7196 6.5304C7.57895 6.38975 7.49993 6.19898 7.49993 6.00007C7.49993 5.80116 7.57895 5.61039 7.7196 5.46974C7.86025 5.32909 8.05102 5.25007 8.24993 5.25007Z"
            fill="#343330"
          />
        </svg>
        Add URL Link
      </div>
      <div class="upload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.24993 5.25007L17.9999 5.25007C18.1988 5.25007 18.3896 5.32909 18.5303 5.46974C18.6709 5.61039 18.7499 5.80116 18.7499 6.00007L18.7499 15.7501C18.7499 15.949 18.6709 16.1397 18.5303 16.2804C18.3896 16.4211 18.1988 16.5001 17.9999 16.5001C17.801 16.5001 17.6103 16.4211 17.4696 16.2804C17.3289 16.1397 17.2499 15.949 17.2499 15.7501L17.2499 7.81038L6.53055 18.5307C6.38982 18.6714 6.19895 18.7505 5.99993 18.7505C5.80091 18.7505 5.61003 18.6714 5.4693 18.5307C5.32857 18.39 5.24951 18.1991 5.24951 18.0001C5.24951 17.801 5.32857 17.6102 5.4693 17.4694L16.1896 6.75007L8.24993 6.75007C8.05102 6.75007 7.86025 6.67105 7.7196 6.5304C7.57895 6.38975 7.49993 6.19898 7.49993 6.00007C7.49993 5.80116 7.57895 5.61039 7.7196 5.46974C7.86025 5.32909 8.05102 5.25007 8.24993 5.25007Z"
            fill="#343330"
          />
        </svg>

        Upload Media
      </div>
      <div class="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M11.9168 11.9168L10.8335 10.8335M11.3752 6.22933C11.3752 9.07129 9.07129 11.3752 6.22933 11.3752C3.38736 11.3752 1.0835 9.07129 1.0835 6.22933C1.0835 3.38736 3.38736 1.0835 6.22933 1.0835C9.07129 1.0835 11.3752 3.38736 11.3752 6.22933Z"
            stroke="#4C4C4C"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input type="text" placeholder="Search and Filter" />
      </div>
    </div>
    <div class="row">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import FiltersDoc from "@/components/FiltersDoc.vue";
import draggable from "vuedraggable";

import QuickOverView from "@/components/widgets/QuickOverView.vue";
import CategoriesTrend from "@/components/widgets/CategoriesTrend.vue";
import DocumentAccess from "@/components/widgets/DocumentAccess.vue";

let list = ref([
  {
    id: 2,
    component: DocumentAccess,
    props: { title: { text: ["Current Documents & Uses"], fontSize: "24" } },
  },
]);

let list2 = ref([
  { id: 5, component: QuickOverView },
  { id: 6, component: CategoriesTrend },
]);
</script>

<style>
</style>
