<template>
  <div class="content">
    <div class="header">
      <router-link to="/"> Home </router-link>
      <router-link to="/guide"> Guide </router-link>
    </div>
    <router-view v-slot="{ Component, route }">
      <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .page {
    position: absolute;
  }

  a {
    font-weight: bold;
    color: #ffffffaf;
    text-decoration: none;
    margin: 1em;
  }

  a:hover, a.router-link-active {
    border-bottom: 2px solid #3498db;
  }

  .header {
    padding: 2rem;
    background-color: #393053;
  }
</style>
