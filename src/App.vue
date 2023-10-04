<script setup lang="ts">
import { ref } from "vue";
import PostCard from "./components/PostCard.vue";

const posts = [
  {
    id: 1,
    img: "https://business-cambodia.com/cms/assets/a8b1dabe-ccc2-4190-b7ce-a96ca2b7fa38",
    title:
      "អគ្គនាយកដ្ឋានពន្ធដារឱ្យអាជីវកម្ម ២ ប្រភេទនេះ ត្រូវតែចេញវិក្កយបត្រឱ្យអ្នកទិញ...",
    tag: "#ចាប់ផ្តើមអាជីវកម្ម",
  },
  {
    id: 2,
    img: "https://business-cambodia.com/cms/assets/5ce8bc99-664e-4259-ae1c-d8e819f5870b",
    title:
      "សមាគមមូលនិធិគ្រួសារខ្មែរ សមាគមសប្បុរសធម៌មេត្តា និងក្រុមហ៊ុន Cambodia My Second Home (CM2H)...",
    tag: "#អចលនទ្រព្យ",
  },
  {
    id: 3,
    img: "https://business-cambodia.com/cms/assets/bbb297f5-6f93-45ce-a828-835d38f19af9",
    title:
      "អគ្គនាយកដ្ឋានពន្ធដារបញ្ជាក់! អាជីវកម្មដែលរកចំណូលប្រចាំឆ្នាំតិចជាងចំនួននេះ មិនតម្រូវឱ្យចុះបញ្ជីពន្ធដារទេ...",
    tag: "#ចាប់ផ្តើមអាជីវកម្ម",
    author: {
        name: "author1",
        publishedAt: "20-10-2023",
        numOfView: "1M"
    },
  },
];

const count = ref(0)

function onClickPost(postId: number) {
  // count.value ++;
  // count.value += 1;
  // count.value = count.value + 1
  console.log(event)
  console.log("Post ", postId, "clicked!")
}

const onClickAnchorTag = () => {
  console.log("Anchor Tag Clicked!")
}

const onFormSubmit = () => {
  console.log("Form sumitted!")
}

const clearCount = () => {
  count.value = 0;
}
</script>

<template>
  <div class="container">
    <!-- Methods Handler -->
    <PostCard
      v-for="post in posts"
      :img="post.img"
      :title="post.title"
      :tag="post.tag"
      @click="onClickPost(post.id)"
    />
    
    <!-- Inline Hander -->
    <div class="card my-style" >
      <div>{{ count }}</div>
      <button @click="count++">Add 1</button>
    </div>

    <!-- Event's Propagation -->
    <!-- TODO: Research more -->
    <div class="card my-style">
      <a @click.stop="onClickAnchorTag">Click Me</a>
    </div>

    <div class="card my-style">
      <form @submit.prevent="onFormSubmit">
        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="card my-style">
      <input @keyup.alt.enter="clearCount" v-model="count" />
    </div>

  </div>
</template>

<style>
.my-style {
  width: 300px;
  padding: 20px;
  width: 300px;
  border: 1px solid grey;
  text-align: center;
}
.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
