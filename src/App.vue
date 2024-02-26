<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
// import PlayersComponentVue from './components/PlayersComponent.vue';


// import {  useTaskStore } from './stores/TaskStore.js';
// const taskStore = useTaskStore();

</script>

<template>
  <div>
    <HeaderComponent />
    <RouterView />
    <!-- <h1>{{ taskStore.team }}</h1>
    <div>
      <div v-for="task in taskStore.tasks" :key="task.id" >
        <PlayersComponentVue :task="task" />
      </div>
    </div> -->
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
