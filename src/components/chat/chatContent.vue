<template>
  <div class="chat-main">
    <div class="chat-main-content">
      <div class="chat-logo">
        <img :src="data.logo" alt="" />
      </div>
      <div class="chat-title">
        {{ data.title }}
      </div>
      <div class="chat-description">
        {{ data.description }}
      </div>

      <div class="chat-tags-wrap">
        <div class="tag" v-for="(tag, i) in data.tags" :key="i">
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input
        type="text"
        v-model="newMessage"
        placeholder="Type your message"
        @keyup.enter="sendMessage"
      />
      <div class="btn" @click="sendMessage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M13.9993 0.666504C6.63935 0.666504 0.666016 6.63984 0.666016 13.9998C0.666016 21.3598 6.63935 27.3332 13.9993 27.3332C21.3594 27.3332 27.3327 21.3598 27.3327 13.9998C27.3327 6.63984 21.3594 0.666504 13.9993 0.666504ZM18.706 14.0398C18.506 14.2398 18.2527 14.3332 17.9993 14.3332C17.746 14.3332 17.4927 14.2398 17.2927 14.0398L14.9993 11.7465V18.6665C14.9993 19.2132 14.546 19.6665 13.9993 19.6665C13.4527 19.6665 12.9993 19.2132 12.9993 18.6665V11.7465L10.706 14.0398C10.3193 14.4265 9.67935 14.4265 9.29268 14.0398C8.90602 13.6532 8.90602 13.0132 9.29268 12.6265L13.2927 8.6265C13.6793 8.23984 14.3193 8.23984 14.706 8.6265L18.706 12.6265C19.0927 13.0132 19.0927 13.6532 18.706 14.0398Z"
            fill="black"
            fill-opacity="0.3"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { io } from "socket.io-client";

const chatId = "3d7d0797-b7be-4e11-a028-18aa98f24c85";

const socket = io("https://pangee-siecwauy.xyz", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

const data = ref({
  logo:
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/04/louis-vuitton-logo-freelogovectors.net_.png",
  title: "Hello",
  description: "Would you like to learn more about these?",
  tags: [
    "Core Values Campaign",
    "Christopher MM Bag",
    "New Arrivals",
    "Brand Ambassadors",
  ],
});

const messages = ref([]);
const newMessage = ref("");

onMounted(() => {
  socket.on("connect", () => {
    console.log("Connected to WebSocket server");

    socket.emit("joinChat", { chatId });

    socket.on("joinChat", (chatId) => {
      console.log(`Connected to chat: ${chatId}`);
    });

    socket.on("newMessage", (message) => {
      messages.value = message;
    });

    socket.on("chatHistory", (chatHistory) => {
      messages.value = chatHistory;
    });
  });
});

const sendMessage = () => {
  console.log("sendMessage");

  if (newMessage.value.trim()) {
    socket.emit("sendMessage", {
      chatId,
      content: newMessage.value,
    });
    newMessage.value = "";
  }

  socket.emit("getHistory", { chatId });
};
</script>

<style scoped></style>
