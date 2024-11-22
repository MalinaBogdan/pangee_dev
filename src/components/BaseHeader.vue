<template>
  <div class="base-header">
    <div class="menu">
      <RouterLink to="/"
        ><div class="item" :class="{ active: path == '/' }">
          Home
        </div></RouterLink
      >
      <div
        class="item"
        @click="
          activeMenu =
            activeMenu == 'InternalDocument' ? '' : 'InternalDocument'
        "
        :class="{ active: activeMenu == 'InternalDocument' }"
      >
        Internal Document
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M12.685 6.12247L7.9975 10.81C7.93217 10.8755 7.85455 10.9275 7.76909 10.963C7.68362 10.9985 7.59199 11.0168 7.49945 11.0168C7.40691 11.0168 7.31528 10.9985 7.22981 10.963C7.14435 10.9275 7.06673 10.8755 7.0014 10.81L2.3139 6.12247C2.18181 5.99038 2.1076 5.81123 2.1076 5.62443C2.1076 5.43762 2.18181 5.25847 2.3139 5.12638C2.44599 4.99429 2.62515 4.92008 2.81195 4.92008C2.99875 4.92008 3.17791 4.99429 3.31 5.12638L7.50004 9.31642L11.6901 5.12579C11.8222 4.9937 12.0013 4.91949 12.1881 4.91949C12.3749 4.91949 12.5541 4.9937 12.6862 5.12579C12.8183 5.25788 12.8925 5.43704 12.8925 5.62384C12.8925 5.81064 12.8183 5.9898 12.6862 6.12189L12.685 6.12247Z"
            fill="#343330"
          />
        </svg>
      </div>
      <RouterLink to="/publishers">
        <div class="item" :class="{ active: path == '/publisher' }">
          Publishers
        </div></RouterLink
      >
      <div class="item">Open Source</div>
      <div
        class="item"
        @click="activeMenu = activeMenu == 'Ecommerce' ? '' : 'Ecommerce'"
        :class="{ active: activeMenu == 'Ecommerce' }"
      >
        Ecommerce
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M12.685 6.12247L7.9975 10.81C7.93217 10.8755 7.85455 10.9275 7.76909 10.963C7.68362 10.9985 7.59199 11.0168 7.49945 11.0168C7.40691 11.0168 7.31528 10.9985 7.22981 10.963C7.14435 10.9275 7.06673 10.8755 7.0014 10.81L2.3139 6.12247C2.18181 5.99038 2.1076 5.81123 2.1076 5.62443C2.1076 5.43762 2.18181 5.25847 2.3139 5.12638C2.44599 4.99429 2.62515 4.92008 2.81195 4.92008C2.99875 4.92008 3.17791 4.99429 3.31 5.12638L7.50004 9.31642L11.6901 5.12579C11.8222 4.9937 12.0013 4.91949 12.1881 4.91949C12.3749 4.91949 12.5541 4.9937 12.6862 5.12579C12.8183 5.25788 12.8925 5.43704 12.8925 5.62384C12.8925 5.81064 12.8183 5.9898 12.6862 6.12189L12.685 6.12247Z"
            fill="#343330"
          />
        </svg>
      </div>
      <div class="item">Financials</div>
    </div>
    <InternalDocument
      v-on-click-outside="() => (activeMenu = '')"
      v-if="activeMenu == 'InternalDocument'"
    />
    <Ecommerce
      v-on-click-outside="() => (activeMenu = '')"
      v-if="activeMenu == 'Ecommerce'"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InternalDocument from "./InternalDocumentMenu.vue";
import Ecommerce from "./EcommerceMenu.vue";
import ClickOutside from "vue-click-outside";
import { useRouter, RouterLink } from "vue-router";
import { vOnClickOutside } from "@vueuse/components";

let activeMenu = ref("");

const router = useRouter();
const path = router.currentRoute.value.path;

console.log(router, "router");
</script>

<script>
export default {
  directives: {
    ClickOutside,
  },
};
</script>
