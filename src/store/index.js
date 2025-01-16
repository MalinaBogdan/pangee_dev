import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    openMenu: "",
    showLoader: false
  }),
  getters: {},
  actions: {},
});
