<template>
  <div class="header">
    <nav class="flex">
      <div>
        <RouterLink to="/">
          <h1>BCCI</h1>
        </RouterLink>
      </div>
      <div class="flex gap">
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
<style>
h1{
  font-size: 40px;
  margin: 0px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.gap {
  gap: 62px;
}
</style>