<script setup lang="ts">
import { useMouseTracker } from "../composables/useMouseTracker";

const { x, y } = useMouseTracker();
</script>

<template>
  <div class="screen-container">
    <h1>Hello from screen 2</h1>
    <br />
    <p>x: {{ x }}, y: {{ y }}</p>
  </div>
</template>
