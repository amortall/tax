<template>
  <div class="myClass">
    <el-container class="container">
      <el-header class="head">
        <div style="float: left;margin-left:100px">
          <h2 style="color: white;margin-top: 10px">我的课程</h2>
        </div>
        <div class="avatar">
          <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        </div>
      </el-header>

      <el-main>
          <div class="courses" style="margin: 30px 30px 0px 30px;border-radius: 30px;background-color: #36A5BB;padding: 0">
            <ul style="list-style: none;padding: 0;margin-top: 50px">
              <li v-for="item in 6">
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

const url = "src/assets/Images/background2.jpeg"



</script>


<style scoped>
.head{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0;
  background-color: #3B6075;
}

*{
  margin: 0;
  padding: 0;
}

.avatar{
  margin-top: 10px;
  margin-right: 20px;
}

.courses{
  display: flex;
  justify-content: flex-start;
  height: auto;
  width: auto;
  padding: 20px;
  background: white;
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
