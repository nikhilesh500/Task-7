import './assets/main.css';
import App from './App.vue';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import HomeComponentVue from './components/HomeComponent.vue'
import PlayersComponentVue from './components/PlayersComponent.vue'
import TeamComponentVue from './components/TeamComponent.vue'

const app = createApp(App)

const routes = [
  {path: '/', component: HomeComponentVue},
  {path: '/players', component: PlayersComponentVue},
  {path: '/team', component: TeamComponentVue},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router).use(createPinia()).mount('#app')
