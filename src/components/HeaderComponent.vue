<template>
  <div class="header">
    <nav>
      <div>
        <a href="/">
          <h1>India</h1>
        </a>
      </div>
      <div>
        <a v-for="item in navigation" :key="item.name" :href="item.href" >
          {{ item.name }}
        </a>
      </div>
    </nav>
  </div>
</template>
<script setup>
const navigation = [
  {name: "Home", href:'/'},
  {name: "Team Playing", href:'/team'},
  {name: "Players", href:'/players'},
]
</script>