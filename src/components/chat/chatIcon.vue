<template>
  <div class="chat-icon closed" v-if="!activeChat" @click="activeChat = true">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.6266 22.4398L25.1466 26.6532C25.28 27.7598 24.0933 28.5332 23.1466 27.9598L18.5333 25.2132C18.2133 25.0265 18.1333 24.6265 18.3066 24.3065C18.9733 23.0798 19.3333 21.6932 19.3333 20.3065C19.3333 15.4265 15.1466 11.4532 9.99998 11.4532C8.94665 11.4532 7.91998 11.6132 6.95998 11.9332C6.46665 12.0932 5.98665 11.6398 6.10665 11.1332C7.31998 6.27984 11.9866 2.6665 17.56 2.6665C24.0666 2.6665 29.3333 7.5865 29.3333 13.6532C29.3333 17.2532 27.48 20.4398 24.6266 22.4398Z"
        fill="url(#paint0_linear_227_165)"
      />
      <path
        d="M17.3333 20.3065C17.3333 21.8931 16.7466 23.3598 15.76 24.5198C14.44 26.1198 12.3466 27.1465 9.99996 27.1465L6.51996 29.2131C5.93329 29.5731 5.18663 29.0798 5.26663 28.3998L5.59996 25.7731C3.81329 24.5331 2.66663 22.5465 2.66663 20.3065C2.66663 17.9598 3.91996 15.8931 5.83996 14.6665C7.02663 13.8931 8.45329 13.4531 9.99996 13.4531C14.0533 13.4531 17.3333 16.5198 17.3333 20.3065Z"
        fill="url(#paint1_linear_227_165)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_227_165"
          x1="17.7107"
          y1="2.6665"
          x2="17.7107"
          y2="28.1541"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-color="#9B9B9B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_227_165"
          x1="9.99996"
          y1="13.4531"
          x2="9.99996"
          y2="29.3342"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-color="#9B9B9B" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  <div class="chat-icon active" v-if="activeChat" @click="activeChat = false">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="white" />
      <path
        d="M11 11L16 16M21 21L16 16M16 16L21 11M16 16L11 21"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
    <p>Close</p>
  </div>
</template>
  
<script setup>
import { ref } from "vue";

const activeChat = ref(true);
</script>
  
  <style scoped>
</style>
  