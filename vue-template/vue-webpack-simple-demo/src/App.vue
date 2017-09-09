<template>
  <div id="app">
    <h1 @click="show()">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {msg:"welcome Vue"}
  },
  methods:{
    show(){
      alert(1);
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
