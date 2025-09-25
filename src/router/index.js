import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import TodosPage from '@/views/TodosPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: LoginPage},
    {path: "/register", component: RegisterPage},
    {path: "/todos", component: TodosPage}
  ],
})

export default router
