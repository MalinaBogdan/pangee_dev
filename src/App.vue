<template>
  <div class="app">
    <ChatIcon />

    <BaseHeader />
    <RouterView />
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import { RouterView } from "vue-router";
import ChatIcon from "@/components/chat/chatIcon.vue";

export default {
  name: "App",
  components: {
    RouterView,
    BaseHeader,
    ChatIcon,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");

html {
  background-color: #e3ece7;
}

#app {
  font-family: "Work Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
}

a {
  color: black;
  text-decoration: none;
}

.chat-icon-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}
</style>
