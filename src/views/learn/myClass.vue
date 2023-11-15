<template>
  <div class="myClass">
    <el-container class="container">
      <my-course-header/>
      <el-main>
          <div class="courses" style="margin: 20px 20px 0 20px;border-radius: 30px;background-color: #36A5BB;padding: 0">
            <ul style="list-style: none;padding: 0;margin-top: 50px">
              <li v-for="item in 6" @click="handleToCourse()" style="width: 25%">
                <img style="width: 100%; height: 100% ;border-radius: 10px" :src="url"  alt=""/>
                <h3>课程名称</h3>
                <h5>学校：老师：</h5>
              </li>
            </ul>
          </div>
      </el-main>
    </el-container>
  </div>



</template>


<script setup>

import {useRouter} from "vue-router";
import MyCourseHeader from "@/components/myCourseHeader.vue";


const url = "src/assets/Images/background2.jpeg"
const router = useRouter()

const handleToCourse = () =>{
  router.push("/course")
}



</script>


<style scoped>

*{
  margin: 0;
  padding: 0;
}


.container{
  display: flex;
  flex-flow: column;
}

.courses{
  display: flex;
  justify-content: flex-start;
  height: 90vh;
  padding: 20px;
  background: white;
}

h5 {
  margin: 0;
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
