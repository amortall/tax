<script setup>


import CourseMenu from "@/components/courseMenu.vue";
import MyCourseHeader from "@/components/myCourseHeader.vue";

</script>

<template>
  <el-container>
    <el-header>
      <my-course-header/>
    </el-header>

    <el-container>
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
el-container{
  display: flex;
  flex-flow: column;
}
</style>
