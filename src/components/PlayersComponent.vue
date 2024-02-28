<template>
  <div>
    <div>
      <p>Counted Value = {{ taskStore.counter }}</p>
    </div>

    <div>
      <h1>{{ taskStore.team }}</h1>
      <p>There are {{ taskStore.totalCount }} players in the players list</p>
      <div v-for="task in tasks" :key="task.id">
        <div class="flex">
          <p>Player - {{ task.id }}</p>
          <h2>{{ task.name }}</h2>
          <p>{{ task.role }}</p>
          <div class="icons">
            <a 
              v-bind:disabled="task.status" 
              :style="{ 
                color: task.status ? 'gray' : 'rgb(1, 156, 218)',
                background: task.status ? 'none' : '',
                cursor: task.status? 'default' : 'pointer'
              }" 
              @click="changeTaskStatus(task.id) ">&#10004;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia';

import {  useTaskStore } from '@/stores/TaskStore.js';
const taskStore = useTaskStore();

const { tasks } = storeToRefs(taskStore);
console.log("Tasks from store:", taskStore.tasks);

const changeTaskStatus = (id) => {
  console.log(id);
  taskStore.playerSelected(id)
};

// const selectedTasks = computed(() => taskStore.selected);
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