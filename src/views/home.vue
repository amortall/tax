<template>
  <div class="home">
    <header-comp></header-comp>
    <el-container class="container">
      <home-main-comp></home-main-comp>
    </el-container>
  </div>
</template>
<script setup>

import HeaderComp from "@/components/headerComp.vue";
import HomeMainComp from "@/components/homeMainComp.vue";


</script>

<style>
/* 可以在这里添加样式 */


* {
  margin: 0;
  padding: 0;
}




</style>
