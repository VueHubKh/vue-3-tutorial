<script setup lang="ts">
interface Props {
  img: string;
  title: string;
  tag: string;
}

defineProps<Props>()
// defineProps({
//   img: Object,
//   title: String,
//   tag: String,
// })
</script>

<template>
  <div class="card">
    <div class="thumbnail">
      <img :src="img"  />
    </div>
    <div class="content">
      <div class="tag">{{ tag }}</div>
      <div class="title">{{ title }}</div>
    </div>
  </div>
</template>

<style>
body {
    background-color: #ffffff;
    max-width: 1024px;    
    margin: 100px auto;
}
img {
  width: 100%;
  height: 1000%;
}

.content {
    padding: 16px;
}

.card {
  max-width: 300px;
  background-color: white;
  box-shadow: 0 10px 10px #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.tag {
    background-color: #e5e7eb;
    width: fit-content;
    padding: 2px 8px;
    border-radius: 0.25rem;
}

.title {
    margin-top: 10px;
}
.title:hover {
    text-decoration: underline;
    cursor: pointer;    
}

</style>
