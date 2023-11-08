<script setup>
import {ref} from "vue";

const questionArr = ref(["为何说中国的经济困境可能让西方企业付出高昂代价？", "美联储维持利率不变，有什么影响？", "电动车真的既便宜又环保？"]);
const nameArr = ref(["李华", "韩梅梅", "阿蒙", "微笑", "阳光", "我与焚天", "梦想成为顶级股神"]);
</script>

<template>
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
</template>

<style scoped>
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
