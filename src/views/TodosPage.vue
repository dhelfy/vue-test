<script setup>
import { useGlobalStore } from '@/store/globalStore'
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=10"
const todos = ref([])
const newTodo = ref("")
const store = useGlobalStore()
const router = useRouter()

const fetchTodos = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  todos.value = data
}

onMounted(() => {
  fetchTodos()
  console.log(store.getLogin)
})

const addTodo = () => {
  todos.value.push(
    {
      "userId": 1,
      "id": Date.now(),
      "title": newTodo.value,
      "completed": false
    },
  )

  newTodo.value = ""
}

watch(
  () => store.isAuthed,
  (isAuthed) => {
    if (!isAuthed) {
      router.push('/')
    }
  },
  { immediate: true }
)
</script>

<template>
  <h1>Todos</h1>
  <div class="addTodoPanel">
    <input type="text" v-model="newTodo">
    <button @click="addTodo">Добавить</button>
  </div>
  <div class="todos">
    <p v-for="todo in todos" :key="todo.id">{{ todo.title }}</p>
  </div>
</template>

<style scoped>
  .addTodoPanel {
    display: flex;
    gap: 8px;
  }

  .todos {
    display: flex;
    flex-direction: column;
  }
</style>
