<template>
  <el-container>
    <el-header class="head">
      <el-menu
          :default-active="activeIndex"
          class="navigation"
          mode="horizontal"
          active-text-color="black"
          @select="handleSelect"
      >
        <!--        <el-menu-item index="/homeIndex">返回</el-menu-item>-->
        <div class="avatar">
          <el-menu-item style="padding: 10px 10px 10px 10px" >
            <h1>我的课程</h1>
          </el-menu-item>

<!--          <el-menu-item>-->
<!--            <div>-->
<!--              <el-avatar-->
<!--                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"-->
<!--              />-->
<!--            </div>-->
<!--          </el-menu-item>-->
        </div>

      </el-menu>
    </el-header>

    <el-main>
      <div>
        <el-row justify="start">
          <el-col
              v-for="(o, index) in 9"
              :key="o"
              :span="8"
              :offset="index > 0 ? 2 : 0"
          >
            <el-card :body-style="{ padding: '0px'}" shadow="hover">
              <el-image
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                  fit="scale-down"
              />
            </el-card>
              <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <el-button text class="button">Operating</el-button>
                </div>
              </div>
          </el-col>
        </el-row>
      </div>
    </el-main>



  </el-container>



</template>


<script setup>

import {ref} from "vue";

const activeIndex = ref('1')


</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

.head {
  padding: 0;
}

.navigation{
  background-color: #36A5BB;
  padding: 0;
}


.avatar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-card {
  width: 480px;
}


</style>
