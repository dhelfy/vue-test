<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
  <main class="mainSection">
    <RouterView />
  </main>
</template>

<style>
  .mainSection {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  * {
    padding: 0;
    margin: 0;
  }
</style>
