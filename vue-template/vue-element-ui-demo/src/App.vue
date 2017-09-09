<template>
  <div>
    <el-button type="primary" icon='search'>主要按钮</el-button>
    <el-button type="warning" icon='share'>主要按钮</el-button>
    <el-button type="danger" icon='document'>主要按钮</el-button>
    <el-button type="success">主要按钮</el-button>
    <el-button type="info">主要按钮</el-button>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-row>
         <el-col :span='8'>
          <div class="grid"></div>
        </el-col>
         <el-col :span='8'>
          <div class="grid"></div>
        </el-col>
        <el-col :span='8'>
          <div class="grid"></div>
        </el-col>
    </el-row>  
  </div>
</template>

<script>
//scoped  表示是局部样式只针对当前页面
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grid{
  border: 1px solid black;
  height: 50px;
}
</style>
