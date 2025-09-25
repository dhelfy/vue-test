<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
const login = ref("")
const pass = ref("")
const router = useRouter()

const onRegister = () => {
  if (login.value.length < 5) {
    alert("Логин должен быть больше 5 символов")
  } else if (pass.value.length < 5) {
    alert("Пароль должен быть больше 5 символов")
  } else {
    window.localStorage.setItem(login.value, pass.value)
    login.value = ""
    pass.value = ""
    router.push("/")
  }
}
</script>

<template>
    <div class="registerForm">
    <h1>Регистрация</h1>
    <input type="text" placeholder="Логин" v-model="login">
    <input type="text" placeholder="Пароль" v-model="pass">
    <button @click="onRegister">Зарегистрироваться</button>
    <RouterLink to="/">Вход</RouterLink>
  </div>
</template>

<style scoped>
  .registerForm {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
