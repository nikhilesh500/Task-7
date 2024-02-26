<template>
  <div>
    Home

    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="name" placeholder="Player Name">
      <input type="text" v-model="role" placeholder="Player Role">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';


const taskStore = useTaskStore()
const name = ref('')
const role = ref('')
const handleSubmit = () => {
  if (name.value && role.value) {
    taskStore.addTask({
      name: name.value,
      role: role.value,
      status: false,
      id: Math.floor(Math.random() * 100000)
    })
  }
  name.value = ''
  role.value = ''
}

</script>