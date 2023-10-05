<script setup lang="ts">
import ScreenOne from "./views/ScreenOne.vue";
import ScreenTwo from "./views/ScreenTwo.vue";

</script>

<template>
  <div class="container">
    <ScreenOne class="screen screen1" />
    <ScreenTwo class="screen" />
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.screen {
  border: 1px solid black;
  height: 50vh;
}

.screen-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.screen1 {
  border: 1px solid red;
}
</style>