<template>
  <div>
    <div>
      <h1>{{ taskStore.team }}</h1>
      <p>{{ taskStore.selectedCount }} players are selected to play in playing eleven</p>
      <div v-for="task in selected" :key="task.id">
        <div class="flex">
          <p>Player - {{ task.id }}</p>
          <h2>{{ task.name }}</h2>
          <p>{{ task.role }}</p>
          <div class="icons">
          <a @click="changeTaskStatus(task.id)">&#10006;</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  useTaskStore } from '../stores/TaskStore.js';
import { storeToRefs } from 'pinia';
const taskStore = useTaskStore();
const { selected } = storeToRefs(taskStore);

const changeTaskStatus = (id) => {
  taskStore.playerNotSelected(id)
};
</script>

<style>


</style>