<script setup>
import {ChatRound, Clock, Edit, FolderChecked, Tickets} from "@element-plus/icons-vue";
const url = "src/assets/Images/background2.jpeg"

</script>

<template>
<div class="container">
  <div class="courseImg">
    <img :src="url" alt="" style="width: 80%;height: 80%;border-radius: 10px;margin-top: 30px">
    <h2 style="color: #606266">税费计算与申报</h2>
  </div>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      text-color="#D4D7DE"
      active-text-color="#606266"
      router="router"
      background-color="#36A5BB"
      style="margin-top: 60px"
  >
    <el-menu-item index="/chapter" >
      <template #title>
        <el-icon><Tickets /></el-icon>
        <h2>章节</h2>
      </template>
    </el-menu-item>
    <el-menu-item index="/homework">
      <template #title>
        <el-icon><Edit /></el-icon>
        <h2>作业</h2>
      </template>
    </el-menu-item>
    <el-menu-item index="/examination">
      <template #title>
        <el-icon><Clock /></el-icon>
        <h2>考试</h2>
      </template>
    </el-menu-item>
    <el-menu-item index="/discuss">
      <template #title>
        <el-icon><ChatRound /></el-icon>
        <h2>讨论</h2>
      </template>
    </el-menu-item>
    <el-menu-item index="/grades">
      <template #title>
        <el-icon><FolderChecked /></el-icon>
        <h2>成绩</h2>
      </template>
    </el-menu-item>
  </el-menu>
</div>
</template>

<style scoped>
.container{
  margin: 20px 0 0 20px;
  border-radius: 10px;
  background-color: #36A5BB;
  height: 90vh;
}

</style>
