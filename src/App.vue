<template>
  <div class="content">
    <div class="header">

      <router-link to="/">
        <img src="./assets/icons8_home.ico" alt="(Home)">
        <p>Home</p>
      </router-link>

      <router-link to="/myWork">
        <img src="./assets/icons8_portfolio.ico" alt="(Home)">
        <p>My work</p>
      </router-link>

      <router-link to="/links">
        <img src="./assets/icons8_linking.ico" alt="(Home)">
        <p>Links</p>
      </router-link>

      <router-link to="/more">
        <img src="./assets/icons8_categorize.ico" alt="(Home)">
        <p>More</p>
      </router-link>

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
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
  }

  a {
    font-weight: bold;
    color: #ffffffaf;
    text-decoration: none;
    margin: 1em;
    display: flex;
    justify-content: center;
    width: auto;
    display: flex;
    width: 7em;
    transition: .2s ease-in-out;
    border-bottom: 3.5px solid #393053;
    border-radius: 3px;
    padding-bottom: 5px;
    -webkit-tap-highlight-color: transparent;
    
  }

  a:hover, a.router-link-active {
    border-bottom: 3.5px solid #635985;
  }

  .header {
    padding: 0.5rem;
    background-color: #393053;
    width: 100%;
    margin: 0 auto;
    text-align: start;
    display: flex;
    justify-content: center;
  }

  img {
    opacity: 70%;
    font-size: 18px;
    margin-right: 10px;
  }

  .header p {
    margin-top: 4px;
  }

</style>
