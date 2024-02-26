<template>
  <div>
    <div>
      <h1>{{ taskStore.team }}</h1>
      <p>{{ taskStore.selectedCount }} players are selected</p>
      <div v-for="task in taskStore.selected" :key="task.id">
        <div class="flex">
          <p>Player - {{ task.id }}</p>
          <h2>{{ task.name }}</h2>
          <p>{{ task.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  useTaskStore } from '../stores/TaskStore.js';
const taskStore = useTaskStore();
</script>

<style>

</style>