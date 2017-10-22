<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png" alt="Bananas"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

div.logo {
  text-align: center;
}
</style>
