<template>
  <div>
    <div>
      <h1>Counter</h1>
      <button @click="taskStore.incrementCounter">+</button>
      {{ taskStore.counter }}
      <button @click="taskStore.decrementCounter">-</button>
    </div>

    <form @submit.prevent="handleSubmit">
      <h1>Enter the Player Details</h1>
      <input type="text" v-model="name" placeholder="Player Name">
      <input type="text" v-model="role" placeholder="Player Role">
      <button type="submit">Submit</button>
    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useTaskStore } from '@/stores/TaskStore';
const taskStore = useTaskStore();


console.log("Tasks from store:", taskStore.tasks);

const name = ref('')
const role = ref('')
const handleSubmit = () => {
  if (name.value && role.value) {
    taskStore.addTask({
      id: Math.floor(Math.random() * 100),
      name: name.value,
      role: role.value,
      status: false,
    })
    console.log(taskStore.tasks)
  }
  name.value = ''
  role.value = ''
}

</script>
<style>

input {
  width: 100%;
  margin: 10px auto;
  padding: 10px 5px;
}
</style>