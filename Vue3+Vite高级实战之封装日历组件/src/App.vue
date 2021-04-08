<template>
  <!-- <img
    alt="Vue logo"
    src="./assets/logo.png"
  />
   -->
  <!-- v-model  :modelValue   @update:modelValue -->
  <h2>{{date}}</h2>
  <my-calendar
    v-model='date'
    @change='change'
  />
</template>

<script setup>
import { ref } from "vue";
let date = ref("2021/5/1");
const change = (...arg) => {
  console.log(arg);
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>