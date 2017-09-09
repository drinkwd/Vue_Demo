<template>
  <h3>welcome vue-webpack</h3>
  <br/>
  <h3 @click="show()">{{msg}}</h3>
  <br/>
  <News></News>
</template>

<script>
import News from './components/New.vue'
export default {
  data () {
    return {msg: '我是数据'}
  },
  methods: {
    show () {
      this.msg = '我终于成功了'
    }
  },
  components: {
    News: News
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: red;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
