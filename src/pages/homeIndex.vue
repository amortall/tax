<template>
  <div class="home">
    <el-container class="container">
      <el-header class="head">
        <el-menu
            :default-active="activeIndex"
            :router = "true"
            class="navigation"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="/homeIndex">首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>学习管理</template>
            <el-menu-item index="/myClass">我的课程</el-menu-item>
            <el-menu-item index="/learnData">学习数据</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3" disabled>社区</el-menu-item>
          <el-menu-item index="4">课程</el-menu-item>
        </el-menu>
      </el-header>

      <el-main class="rank">
        <el-card class="message" shadow="hover">
          <template #header>
            <div class="message-header">
              <span>问题热榜</span>
              <!--              <el-button class="button" text>Operation button</el-button>-->
            </div>
          </template>
          <div v-for="(integral, o) in questionArr" :key="o" class="text-item">{{ o + 1 + "  " }}{{ integral }}</div>
        </el-card>
        <el-card class="message" shadow="hover">
          <template #header>
            <div class="message-header">
              <span>课程推荐</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
        <el-card class="message" shadow="hover">
          <template #header>
            <div class="message-header">
              <span>积分排行</span>
            </div>
          </template>
          <div v-for="(integral, o) in nameArr" :key="o" class="text-item">{{ o + 1 + "  " }}{{ integral }}</div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import {ref} from 'vue';
// import {useRouter} from "vue-router";
const activeIndex = ref('1')
const questionArr = ref(["为何说中国的经济困境可能让西方企业付出高昂代价？", "美联储维持利率不变，有什么影响？", "电动车真的既便宜又环保？"]);
const nameArr = ref(["李华", "韩梅梅", "阿蒙", "微笑", "阳光", "我与焚天", "梦想成为顶级股神"]);
// const router = useRouter()
// const onLearnData = () => {
//   router.push("/learnData");
// }




</script>

<style>
/* 可以在这里添加样式 */
.head {
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
}

.navigation {
  background-color: #36A5BB;
  padding: 0;
}

.rank {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.message-header {
  font-family: 站酷庆科黄油体;
  font-size: 48px;
}

.message {
  width: 480px;
  height: 500px;
  margin: 40px;
  border-radius: 15px;
  background-color: #ECF6EC;
}

.text-item {
  font-family: 黑体;
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;

}
</style>
