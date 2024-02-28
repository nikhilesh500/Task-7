<template>
  <div>
    <div class="flex">
      <h2>Counter</h2>
      <div>
        <button @click="taskStore.decrementCounter">-</button>
        {{ taskStore.counter }}
        <button @click="taskStore.incrementCounter">+</button>
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <h1>Enter the Player Details</h1>
      <input type="text" v-model="name" placeholder="Player Name">
      <input type="text" v-model="role" placeholder="Player Role">
      <button type="submit">Add player</button>
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
flex{
  display: flex;
}

input {
  width: 95%;
  margin: 10px auto;
  padding: 10px 5px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
input:focus {
  outline: none;
  border: 1px solid rgb(1, 156, 218);
  transition: 0.4s;
}
button {
  margin: 10px auto;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 2px black;
}
button:hover {
  cursor: pointer;
  background-color: rgb(1, 156, 218);
  color: white;
}
</style>