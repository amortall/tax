<script setup>

</script>

<template>
  <el-header class="head">
    <el-menu
        :default-active="activeIndex"
        router
        class="navigation"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>学习管理</template>
        <el-menu-item index="/myClass">我的课程</el-menu-item>
        <el-menu-item index="/learnData">学习数据</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/community">社区</el-menu-item>
      <el-menu-item index="/course">课程</el-menu-item>
    </el-menu>

  </el-header>
</template>

<style scoped>
.head {
  padding: 0;
}

.navigation {
  background-color: #36A5BB;
  padding: 0;
}
</style>
