<template>
  <div class="internal">
    <div class="internal-top">
      <h4>Performance: Campaign Name | Spring | 2024</h4>

      <div class="right">
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
        <div class="calendar-wrap">
          <div class="calendar" @click="showCalendar = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13 2.25H11.25V1.5C11.25 1.4337 11.2237 1.37011 11.1768 1.32322C11.1299 1.27634 11.0663 1.25 11 1.25C10.9337 1.25 10.8701 1.27634 10.8232 1.32322C10.7763 1.37011 10.75 1.4337 10.75 1.5V2.25H5.25V1.5C5.25 1.4337 5.22366 1.37011 5.17678 1.32322C5.12989 1.27634 5.0663 1.25 5 1.25C4.9337 1.25 4.87011 1.27634 4.82322 1.32322C4.77634 1.37011 4.75 1.4337 4.75 1.5V2.25H3C2.80109 2.25 2.61032 2.32902 2.46967 2.46967C2.32902 2.61032 2.25 2.80109 2.25 3V13C2.25 13.1989 2.32902 13.3897 2.46967 13.5303C2.61032 13.671 2.80109 13.75 3 13.75H13C13.1989 13.75 13.3897 13.671 13.5303 13.5303C13.671 13.3897 13.75 13.1989 13.75 13V3C13.75 2.80109 13.671 2.61032 13.5303 2.46967C13.3897 2.32902 13.1989 2.25 13 2.25ZM3 2.75H4.75V3.5C4.75 3.5663 4.77634 3.62989 4.82322 3.67678C4.87011 3.72366 4.9337 3.75 5 3.75C5.0663 3.75 5.12989 3.72366 5.17678 3.67678C5.22366 3.62989 5.25 3.5663 5.25 3.5V2.75H10.75V3.5C10.75 3.5663 10.7763 3.62989 10.8232 3.67678C10.8701 3.72366 10.9337 3.75 11 3.75C11.0663 3.75 11.1299 3.72366 11.1768 3.67678C11.2237 3.62989 11.25 3.5663 11.25 3.5V2.75H13C13.0663 2.75 13.1299 2.77634 13.1768 2.82322C13.2237 2.87011 13.25 2.9337 13.25 3V5.25H2.75V3C2.75 2.9337 2.77634 2.87011 2.82322 2.82322C2.87011 2.77634 2.9337 2.75 3 2.75ZM13 13.25H3C2.9337 13.25 2.87011 13.2237 2.82322 13.1768C2.77634 13.1299 2.75 13.0663 2.75 13V5.75H13.25V13C13.25 13.0663 13.2237 13.1299 13.1768 13.1768C13.1299 13.2237 13.0663 13.25 13 13.25ZM6.75 7.5V11.5C6.75 11.5663 6.72366 11.6299 6.67678 11.6768C6.62989 11.7237 6.5663 11.75 6.5 11.75C6.4337 11.75 6.37011 11.7237 6.32322 11.6768C6.27634 11.6299 6.25 11.5663 6.25 11.5V7.90438L5.61188 8.22375C5.55253 8.25342 5.48383 8.2583 5.42089 8.23732C5.35795 8.21634 5.30592 8.17122 5.27625 8.11187C5.24658 8.05253 5.2417 7.98383 5.26268 7.92089C5.28366 7.85795 5.32878 7.80592 5.38812 7.77625L6.38812 7.27625C6.42625 7.25717 6.46863 7.24816 6.51122 7.25007C6.55381 7.25199 6.59521 7.26476 6.63147 7.28718C6.66774 7.30961 6.69767 7.34093 6.71841 7.37818C6.73916 7.41543 6.75003 7.45736 6.75 7.5ZM10.5 9.25L9 11.25H10.5C10.5663 11.25 10.6299 11.2763 10.6768 11.3232C10.7237 11.3701 10.75 11.4337 10.75 11.5C10.75 11.5663 10.7237 11.6299 10.6768 11.6768C10.6299 11.7237 10.5663 11.75 10.5 11.75H8.5C8.45357 11.75 8.40806 11.7371 8.36857 11.7127C8.32907 11.6883 8.29716 11.6533 8.27639 11.6118C8.25563 11.5703 8.24684 11.5238 8.25101 11.4775C8.25518 11.4313 8.27214 11.3871 8.3 11.35L10.0988 8.95187C10.1974 8.82196 10.2506 8.66315 10.25 8.5C10.2502 8.33475 10.1958 8.17406 10.0953 8.0429C9.99472 7.91174 9.85368 7.81746 9.69405 7.7747C9.53443 7.73195 9.36515 7.74311 9.21251 7.80645C9.05988 7.8698 8.93244 7.98178 8.85 8.125C8.81541 8.17942 8.76113 8.21836 8.6985 8.2337C8.63587 8.24904 8.56974 8.23959 8.51391 8.20732C8.45809 8.17505 8.41689 8.12246 8.39892 8.06054C8.38096 7.99861 8.38761 7.93214 8.4175 7.875C8.55509 7.63671 8.76746 7.45048 9.02168 7.34519C9.27589 7.2399 9.55775 7.22143 9.82353 7.29265C10.0893 7.36387 10.3242 7.52079 10.4917 7.73908C10.6592 7.95738 10.75 8.22484 10.75 8.5C10.751 8.77062 10.6631 9.03408 10.5 9.25Z"
                fill="#343330"
              />
            </svg>
            <p>Calendar Range - {{ formattedDateRange }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M13.7122 6.53073L8.64512 11.5307C8.57451 11.6007 8.4906 11.6561 8.39822 11.694C8.30583 11.7318 8.20678 11.7513 8.10675 11.7513C8.00671 11.7513 7.90766 11.7318 7.81528 11.694C7.72289 11.6561 7.63898 11.6007 7.56837 11.5307L2.50132 6.53073C2.35854 6.38984 2.27832 6.19874 2.27832 5.99948C2.27832 5.80023 2.35854 5.60913 2.50132 5.46823C2.64411 5.32734 2.83777 5.24818 3.0397 5.24818C3.24163 5.24818 3.43528 5.32734 3.57807 5.46823L8.10738 9.93761L12.6367 5.46761C12.7795 5.32671 12.9731 5.24756 13.1751 5.24756C13.377 5.24756 13.5707 5.32671 13.7134 5.46761C13.8562 5.60851 13.9364 5.7996 13.9364 5.99886C13.9364 6.19812 13.8562 6.38921 13.7134 6.53011L13.7122 6.53073Z"
                fill="#7C817D"
              />
            </svg>
          </div>
          <div
            class="date-picker-wrap"
            v-on-click-outside="() => (showCalendar = false)"
          >
            <VDatePicker
              v-if="showCalendar"
              v-model.range="dateRange"
              mode="dateTime"
              :rules="rules"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <FiltersMain />
      <div class="col-center">
        <draggable class="list-group" :list="list" group="people1" itemKey="id">
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
import { ref, computed } from "vue";
import FiltersMain from "@/components/FiltersMain.vue";
import draggable from "vuedraggable";

import TopKeywords from "@/components/widgets/TopKeywords.vue";
import DataSpend from "@/components/widgets/DataSpend.vue";
import QuickOverView from "@/components/widgets/QuickOverView.vue";
import CategoriesTrend from "@/components/widgets/CategoriesTrend.vue";
import RevenueTrends from "@/components/widgets/RevenueTrends.vue";
import TopProduct from "@/components/widgets/TopProduct.vue";

import { vOnClickOutside } from "@vueuse/components";

import { format } from "date-fns";

const dateRange = ref({
  start: new Date(),
  end: new Date(),
});
const rules = {
  milliseconds: 500,
};

let showCalendar = ref(false);

let list = ref([
  { id: 2, component: TopKeywords },
  { id: 2, component: DataSpend, props: { size: "large" } },
  { id: 2, component: TopProduct, props: { size: "large" } },
]);

let list2 = ref([
  { id: 5, component: QuickOverView },
  { id: 6, component: CategoriesTrend },
  { id: 7, component: RevenueTrends },
]);

const formattedDateRange = computed(() => {
  const { start, end } = dateRange.value;
  if (!start || !end) return "Select a date range";

  const formattedStart = format(new Date(start), "MMMM d, yyyy");
  const formattedEnd = format(new Date(end), "MMMM d, yyyy");

  return `${formattedStart} - ${formattedEnd}`;
});
</script>

<style>
</style>
