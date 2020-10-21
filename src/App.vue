<template>
  <div id="app">
    <!-- <CurrentWeather /> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // CurrentWeather,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
