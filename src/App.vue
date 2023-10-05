<script setup lang="ts">
import { ref } from "vue";
import CustomInput from "./components/CustomInput.vue";

const username = ref("")
const password = ref("");
const gender = ref("");

</script>

<template>
  {{ username }} {{ password }} {{ gender }}
  <hr>
  <CustomInput 
    v-model:username.capitalize="username" 
    v-model:password.number="password"
    v-model:gender="gender"
  />
</template>