<script setup>
import { ref } from 'vue';

const counter = ref(0)
const increment = () => {
    counter.value++
}
const decrement = () => {
    counter.value--
}
</script>

<template>
    <h1>Hello! That's a test page</h1>
    <p>Im a counter: <bold>{{ counter }}</bold>
    </p>
    <p>Click button below me to increment or decrement my value</p>
    <div class="flex-container">
        <button @click="increment" class="button">Increment!</button>
        <button @click="decrement" class="button">Decrement!</button>
    </div>
</template>

<style scoped>
.flex-container {
    display: flex;
    gap: 8px;
}

.button {
    background-color: #002fff;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
}

.button:active {
    background-color: #0020ad;
}
</style>