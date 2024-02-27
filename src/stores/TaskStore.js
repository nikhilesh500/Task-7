import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTaskStore = defineStore('counter', () => {
  const team = ref('India');
  
  const counter = ref(0);
  const incrementCounter = () => {
    counter.value++;
  };
  const decrementCounter = () => {
    counter.value--;
  };

  const tasks = ref([
    { id: 1, name: 'Dhoni', role: 'Wicket Keeper', status: true },
    { id: 2, name: 'Nikhil', role: 'All rounder', status: false },
    { id: 3, name: 'Gill', role: 'Batsmen', status: true },
    { id: 4, name: 'Kohli', role: 'Batsmen', status: true },
    { id: 5, name: 'Tarun', role: 'All rounder', status: false },
  ]);
  const totalCount = computed(() => {
    return tasks.value.length;
  });


  const selected = computed(() => {
    return tasks.value.filter(task => task.status);
  });
  const selectedCount = computed(() => {
    return tasks.value.reduce((prev, curr) => {
      return prev + (curr.status ? 1 : 0);
    }, 0);
  });

  const addTask = (task) => {
    tasks.value.push(task);
  };

  return {
    tasks,
    team,
    selected,
    selectedCount,
    totalCount,
    addTask,
    counter,
    incrementCounter,
    decrementCounter,
  };
});