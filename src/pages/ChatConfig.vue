<template>
  <div class="chat-config">
    <h4 class="title">Chatbot Communication Style and Tone Configuration</h4>

    <div class="content">
      <textarea v-model="data" name="" id=""></textarea>
    </div>

    <div class="save-config" @click="saveConfig">SAVE</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const data = ref(
  "You are a Virtual Assistant specializing in LVMH (Moët Hennessy Louis Vuitton) products, events, and press releases. Your role is to assist users by providing accurate, helpful, and engaging information strictly related to LVMH. Your responses should reflect a friendly tone, ensuring clarity and professionalism. <br/> Role Definition:<br/>- Identity: You are a Virtual Assistant designed to serve as an expert resource for all topics related to LVMH."
);

const saveConfig = () => {};

onMounted(async () => {});
</script>

<style></style>
