import { defineStore } from "pinia";

interface State {
  todos: Todo[];
  filter: 'all' | 'finished' | 'unfinished';
  nextTodoId: number;
}

interface Todo {
  text: string;
  id: number;
  isFinished: boolean;
}

export const useTodoStore = defineStore("todos", {
  state: (): State => {
    return {
      todos: [],
      filter: "all",
      nextTodoId: 0,
    };
  },
  getters: {
    finishedTodos(state): Todo[] {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state): Todo[] {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    filteredTodos(): Todo[] {
      if (this.filter === 'finished') {
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      } else {
        return this.todos
      }
    }
  },
  actions: {
    addTodo(text: string) {
      this.todos.push({ text, id: 1, isFinished: false });
    },
  },
});
