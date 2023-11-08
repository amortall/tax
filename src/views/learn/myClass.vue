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
      <div id="course" style="border-radius: 5px">
        <el-tabs v-model="activeName">
            <div id="study-course">
              <div style="margin-top: 30px">
                <ul style="list-style: none;padding: 0">
                  <li v-for="(course,index) in courses" :key="index">
                    <img :src="require(`@/assets/${course.courseCover}`)" style="width: 280px;height: 200px;border-radius: 20px;"
                         @click="courseId(course.courseId,course.courseName)">
                    <h3 @click="courseId(course.courseId,course.courseName)">{{ course.courseName }}</h3>
                    <h5>学校：{{ course.schoolName }}</h5>
                    <h5>老师：{{ course.userName }}</h5>
                    <h5>开课时间：{{ course.gmtStart }}-{{ course.gmtEnd }}</h5>
                  </li>
                </ul>
              </div>
            </div>
<!--          <el-tab-pane label="我教的课" name="second">-->
<!--            <professor-course></professor-course>-->
<!--          </el-tab-pane>-->
        </el-tabs>
      </div>

    </el-main>



  </el-container>



</template>


<script setup>

import { ref, watch} from "vue";

const activeIndex = ref('1')

let input1;
let courses = ["云计算"]


watch(input1, (newValue, oldValue) => {
  // 监听input输入框，若没东西了，就回复默认状态
  if (newValue == "") {
    // 发请求回到初始列表数据状态
    console.log("搜索框没东西了，回复初始状态");
  }
})

const courseId =(courseIndex, courseName) => {
  console.log(courseIndex, courseName)
  // eslint-disable-next-line no-unused-vars
  let courseInfo = {
    courseName: courseName,
    courseIndex: courseIndex
  }
}


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

#study-course {
  padding-bottom: 100px;
}

h5 {
  margin: 0px;
  padding: 5px;
  font-size: 13px;
  color: #a8a8b3;
}

h3 {
  margin: 0;
  padding: 10px;
}

li {
  margin-bottom: 20px;
  display: inline-block;
  padding-right: 30px;
  padding-left: 30px;
  width: 330px;
}

img:hover {
  cursor: pointer;
}

h3:hover {
  cursor: pointer;
  color: cornflowerblue;
}

</style>
