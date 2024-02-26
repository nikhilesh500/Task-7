<template>
  <div>
    <h1>{{ taskStore.team }}</h1>
    <p>There are {{ taskStore.totalCount }} players in the players list</p>
    <div v-for="task in taskStore.tasks" :key="task.id">
      <div class="flex">
        <p>Player - {{ task.id }}</p>
        <h2>{{ task.name }}</h2>
        <p>{{ task.role }}</p>
        <div class="icons">
          <a>&#10004;</a>
          <a>&#10006;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  useTaskStore } from '../stores/TaskStore.js';


const taskStore = useTaskStore();

// const props = defineProps({
//   task: Object
// });
</script>

<style>
.flex {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>