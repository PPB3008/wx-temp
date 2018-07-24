<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script lang="typescript">
// import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
export default class App extends Vue {

}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
