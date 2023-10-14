<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from './stores/user';
import { userUserStoreV2 } from './stores/userv2';

const userStore = useUserStore();
const userStoreV2 = userUserStoreV2()

onMounted(() => userStore.fetchUser())
onMounted(() => userStoreV2.fetchUserV2());
</script>


<template>
  <h1>V1</h1>
  <h1>{{ userStore.fullName }}</h1>

  <hr>

  <h1>V2</h1>
  <h1>{{ userStoreV2.fullNameV2 }}</h1>
</template>