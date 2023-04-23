<template>
  <div class="content">
    <router-link to="/"> Home </router-link>
    <router-link to="/guide"> Guide </router-link>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
* {
  user-select: none;
  
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1em;
}

a:hover, a.router-link-active {
  border-bottom: 2px solid #3498db;
}
</style>
