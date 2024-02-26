import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id:1, name: 'Dhoni', role:'Wicket Keeper', status: true },
      { id:2, name: 'Nikhil', role:'All rounder', status: false },
      { id:3, name: 'Gill', role:'Batsmen', status: true },
      { id:4, name: 'Kohli', role:'Batsmen', status: true },
      { id:5, name: 'Tarun', role:'All rounder', status: false },
    ],
    team: 'India'
  }),
  getters: {
    selected() {
      console.log(this.tasks.filter(task => task.status))
      return this.tasks.filter(task => task.status)
    },
    selectedCount() {
      return this.tasks.reduce((prev, curr) => {
        return prev + (curr.status ? 1 : 0)
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length;
    }
  },
  actions: {
    addTask(task) {
      this.tasks.push(task)
    }
  }
});