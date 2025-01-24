<template>
  <div @mouseleave="subMenu = {}">
    <div class="content internal-document">
      <div class="dialog-arrow"></div>
      <div class="search" @click="showSearch = !showSearch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22 22L20 20M21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="left">
        <div class="title">Sub Menu</div>

        <div class="sub-menu">
          <RouterLink :to="{ path: '/publishers' }" @click="store.openMenu = ''">
            Publishers
          </RouterLink>
        </div>
        <div class="sub-menu">
          <RouterLink :to="{ path: '/chat-configuration' }" @click="store.openMenu = ''">
            Chat Config
          </RouterLink>
        </div>
        <div class="sub-menu">
          <RouterLink :to="{ path: '/media' }" @click="store.openMenu = ''">
            Media
          </RouterLink>
        </div>
      </div>
      <div class="right">
        <div class="title">Campaign Name | Spring | 2024</div>
        <div class="filters">
          <div class="item active">Team</div>
          <div class="item">Talent</div>
          <div class="item">Theme</div>
          <div class="item">Brand</div>
          <div class="item">Location</div>
          <div class="item">Publishers</div>
        </div>
        <div class="artists">
          <div class="artist">
            <div class="img">
              <img src="../assets/images/artist1.png" alt="" />
            </div>
            <div class="checkbox-wrap">
              <div class="name">Roger Federer</div>
              <div class="toggle-container">
                <label class="switch">
                  <input type="checkbox" v-model="toggleData" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="artist">
            <div class="img">
              <img src="../assets/images/artist2.png" alt="" />
            </div>
            <div class="checkbox-wrap">
              <div class="name">Pharrell Williams</div>
              <div class="toggle-container">
                <label class="switch">
                  <input type="checkbox" v-model="toggleData" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="artist">
            <div class="img">
              <img src="../assets/images/artist3.png" alt="" />
            </div>
            <div class="checkbox-wrap">
              <div class="name">Annie Lieberwitz</div>
              <div class="toggle-container">
                <label class="switch">
                  <input type="checkbox" v-model="toggleData" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="artist">
            <div class="img">
              <img src="../assets/images/artist4.png" alt="" />
            </div>
            <div class="checkbox-wrap">
              <div class="name">Raphael Nadal</div>
              <div class="toggle-container">
                <label class="switch">
                  <input type="checkbox" v-model="toggleData" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="artist">
            <div class="img">
              <img src="../assets/images/artist5.png" alt="" />
            </div>
            <div class="checkbox-wrap">
              <div class="name">James Jordan</div>
              <div class="toggle-container">
                <label class="switch">
                  <input type="checkbox" v-model="toggleData" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="artist">
            <div class="img">
              <img src="../assets/images/artist6.png" alt="" />
            </div>
            <div class="checkbox-wrap">
              <div class="name">
                Amy <br />
                Lee
              </div>
              <div class="toggle-container">
                <label class="switch">
                  <input type="checkbox" v-model="toggleData" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="artist">
            <div class="img">
              <img src="../assets/images/artist7.png" alt="" />
            </div>
            <div class="checkbox-wrap">
              <div class="name">Michael Vogal</div>
              <div class="toggle-container">
                <label class="switch">
                  <input type="checkbox" v-model="toggleData" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-sub-menu" v-if="subMenu.items">
      <div
        class="dialog-arrow"
        :style="{ top: (subMenu.index + 1) * 60 + 28 + 'px' }"
      ></div>

      <div class="sub-title">{{ subMenu.itemsName }}</div>
      <div class="sub-item" v-for="(subItem, i) in subMenu.items" :key="i">
        <RouterLink :to="{ path: '/internal' + i }" @click="store.openMenu = ''">
          {{ subItem.title }}
        </RouterLink>
      </div>
    </div>

    <Search v-on-click-outside="() => (showSearch = false)" v-if="showSearch" />
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import Search from "./SearchElement.vue";
import { vOnClickOutside } from "@vueuse/components";
import { useRouter, RouterLink } from "vue-router";
import { useStore } from "@/store";

const axios = inject("axios");

const store = useStore();
const campaingsMenu = ref();
const publishersMenu = ref();

const router = useRouter();
const path = router.currentRoute.value.path;

const toggleData = ref(false);
const subMenu = ref({});
const showSearch = ref(false);

let colorArrow = "";

onMounted(async () => {
  axios.get("/api/campaings").then((data) => {
    campaingsMenu.value = data.data;

    menu.value.forEach((item) => {
      if (item.title == "Campaigns") {
        item.items = data.data;
      }
    });
  });
  axios.get("/api/publishers/menu").then((data) => {
    publishersMenu.value = data.data;

    menu.value.forEach((item) => {
      if (item.title == "Publishers") {
        item.items = data.data;
      }
    });
  });
});

function selectColorArrow() {
  if (path === "/" || path === "/publishers" || path.includes("/internal")) {
    colorArrow = "#e6ede8";
  } else if (path === "/open-source") {
    colorArrow = "#d1e0e2";
  } else if (path === "/financials") {
    colorArrow = "#e4ebe7";
  } else {
    colorArrow = "";
  }
}

selectColorArrow();

const menu = ref([
  {
    title: "Campaigns",
    itemsName: "Campaign List",
    items: [
      "Campaign name | Winter | 2024",
      "Campaign name | Summer | 2024",
      "Campaign name | Fall | 2024",
      "Campaign name | Spring | 2024",
      "Campaign name | Winter | 2023",
      "Campaign name | Summer | 2023",
      "Campaign name | Fall | 2023",
      "Campaign name | Spring | 2023",
      "Campaign name | Winter | 2022",
    ],
  },
  {
    title: "Publishers",
    itemsName: "Publishers Name",
    items: ["Vogue", "Elle", "Conde Nast", "Versace", "Gucci", "Parada", "Channel"],
  },
  {
    title: "Performance",
  },
  {
    title: "Products",
  },
  {
    title: "Media",
  },
]);
</script>

<style scoped>
.dialog-arrow {
  position: absolute;
  top: -11px;
  left: 450px;
  z-index: 7;
  width: 23px;
  height: 23px;
  border-radius: 5px;
  transform: rotate(315deg);
  border-top: 1px solid white;
  border-right: 1px solid white;
  background-color: v-bind(colorArrow);
}
</style>
