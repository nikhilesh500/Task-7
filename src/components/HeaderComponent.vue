<template>
  <div class="header">
    <nav>
      <div>
        <a href="/">
          <h1>India</h1>
        </a>
      </div>
      <div>
        <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" >
          {{ item.name }}
        </RouterLink>
      </div>
    </nav>
  </div>
</template>
<script setup>
const navigation = [
  {name: "Home", href:'/'},
  {name: "Players", href:'/players'},
  {name: "Team Playing", href:'/team'},
]
</script>