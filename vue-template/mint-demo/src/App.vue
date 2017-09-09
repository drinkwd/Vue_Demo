<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="page-swipe">
    <mt-swipe :auto="false">
    <mt-swipe-item :class={aaa:true}><div><img slot="icon" src="./assets/logo.png"></div></mt-swipe-item>
    <mt-swipe-item :class={aaa:true}><div><img slot="icon" src="./assets/logo.png"></div></mt-swipe-item>
    <mt-swipe-item :class={aaa:true}><div><img slot="icon" src="./assets/logo.png"></div></mt-swipe-item>
    </mt-swipe>
    </div>
      <mt-tabbar v-model="selected">
   <mt-tab-item id="外卖">
     <img slot="icon" src="./assets/logo.png">
    外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
    <img slot="icon" src="./assets/logo.png">
    订单
    </mt-tab-item>
   <mt-tab-item id="发现">
      <img slot="icon" src="./assets/logo.png">
      发现
   </mt-tab-item>
    <mt-tab-item id="我的">
     <img slot="icon" src="./assets/logo.png">
     我的
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:'1'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.page-swipe  {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.mint-swipe-indicator{
  height:15px;
  width:15px;
  background: red;
  opacity: 1
}
</style>
