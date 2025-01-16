<template>
  <svg
    class="loader-main"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="200"
    height="200"
    style="shape-rendering: auto; display: block; background: rgb(255, 255, 255)"
  >
    <g>
      <circle stroke-width="9" stroke="#6ad2ff" fill="none" r="0" cy="50" cx="50">
        <animate
          begin="0s"
          calcMode="spline"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          values="0;53"
          dur="1.0869565217391304s"
          repeatCount="indefinite"
          attributeName="r"
        />
        <animate
          begin="0s"
          calcMode="spline"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          values="1;0"
          dur="1.0869565217391304s"
          repeatCount="indefinite"
          attributeName="opacity"
        />
      </circle>
      <circle stroke-width="9" stroke="#f07c74" fill="none" r="0" cy="50" cx="50">
        <animate
          begin="-0.5434782608695652s"
          calcMode="spline"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          values="0;53"
          dur="1.0869565217391304s"
          repeatCount="indefinite"
          attributeName="r"
        />
        <animate
          begin="-0.5434782608695652s"
          calcMode="spline"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          values="1;0"
          dur="1.0869565217391304s"
          repeatCount="indefinite"
          attributeName="opacity"
        />
      </circle>
      <g />
    </g>
  </svg>
</template>

<script setup></script>

<style scoped>
.loader-main {
  background: rgba(240, 248, 255, 0) !important;
  margin: 50px auto;
  width: 100px;
}
</style>
