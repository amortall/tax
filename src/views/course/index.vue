<script setup>


import CourseMenu from "@/components/courseMenu.vue";
import MyCourseHeader from "@/components/myCourseHeader.vue";

</script>

<template>
  <el-container class="container">
    <my-course-header/>

    <el-container class="main">
      <el-aside>
        <course-menu/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.container{
  display: flex;
  flex-flow: column;
}

.main{
  display: flex;
}

</style>
