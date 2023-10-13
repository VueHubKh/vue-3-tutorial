<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "./stores/todos";

import TodoTracker from "./components/TodoTracker.vue";

const todoStore = useTodoStore();
const inputTodo = ref("");

const handleAddTodo = () => {
  todoStore.addTodo(inputTodo.value);
  inputTodo.value = "";
};
</script>

<template>
  <div class="container">
    <TodoTracker></TodoTracker>
    <div>
      <input
        v-model="inputTodo"
        @keyup.enter="handleAddTodo"
        style="width: 100%" />
    </div>
    <br />
    <div v-for="(todo, idx) in todoStore.filteredTodos">
      <div class="todo-item">
        <div :class="todo.isFinished ? 'finished-todo' : ''">
          {{ idx + 1 }}. {{ todo.text }}
        </div>
        <input
          type="checkbox"
          v-model="todo.isFinished"
          style="width: 32px; height: 32px" />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1024px;
  margin: 20px auto;
}

.todo-item {
  display: flex;
  justify-content: space-between;

  margin: 10px;
  align-items: center;
  border: 1px solid grey;
  padding: 10px 20px;
  font-size: 26px;
  border-radius: 10px;
}
.finished-todo {
  text-decoration: line-through;
}

input {
  widows: 100%;
  height: 32px;
  font-size: 26px;
  padding: 5px 10px;
}
</style>
