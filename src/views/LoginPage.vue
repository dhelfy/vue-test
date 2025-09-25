<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { useGlobalStore } from '@/store/globalStore';
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
const login = ref("")
const pass = ref("")

const store = useGlobalStore()
const router = useRouter()

const onLogin = () => {
  if (login.value.length == 0) {
    alert("Введите логин")
  } else if (pass.value.length == 0) {
    alert("Введите пароль")
  } else {
    const answer = window.localStorage.getItem(login.value)
    if (answer == null) {
      alert("Такого пользователя не существует")
    } else {
      if (answer == pass.value) {
        store.setIsAuthed(true)
        store.setLogin(login.value)
        login.value = ""
        pass.value = ""
        router.push("/todos")
      } else {
        alert("Неверный пароль")
      }
    }
  }
}
</script>

<template>
  <div class="loginForm">
    <h1>Вход</h1>
    <InputText type="text" v-model="login" placeholder="Логин"/>
    <InputText type="text" v-model="pass" placeholder="Пароль"/>
    <Button label="Войти" @click="onLogin"></Button>
    <RouterLink to="register">Регистрация</RouterLink>
  </div>
</template>

<style scoped>
  .loginForm {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
