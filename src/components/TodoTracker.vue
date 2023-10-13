<script setup lang="ts">
import { useTodoStore } from "../stores/todos";
const todoStore = useTodoStore();

const onSelectAll = () => (todoStore.filter = "all");
const onSelectFinished = () => (todoStore.filter = "finished");
const onSelectUnfinished = () => (todoStore.filter = "unfinished");
</script>

<template>
  <div class="card-wrapper">
    <div class="card" @click="onSelectAll">
      All Todos: {{ todoStore.todos.length }}
    </div>
    <div class="card" @click="onSelectFinished">
      Finished Todos: {{ todoStore.finishedTodos.length }}
    </div>
    <div class="card" @click="onSelectUnfinished">
      Unfinished Todos: {{ todoStore.unfinishedTodos.length }}
    </div>
  </div>
</template>

<style>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  gap: 10px;
}
.card {
  border: 1px solid grey;
  min-width: 100px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.card:hover {
  cursor: pointer;
}
</style>
