<template>
  <div class="learnData">
    <el-container class="container">
      <el-header class="head">
        <el-menu
            :default-active="activeIndex"
            class="navigation"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="1">学习数据</el-menu-item>
        </el-menu>
      </el-header>

      <el-main class="dataDetail">
        <el-card class="personCard">
          <div>年龄:</div>
          <div>积分:</div>
          <div>学习时长: </div>
          <div>职业: </div>
          <div>课程:</div>
        </el-card>
        <el-card class="dataCard" style="margin-left: 5%">
          <div class="echarts-box">
            <div id="myEcharts" :style="{ width: '300px', height: '400px' }"></div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import {onMounted, ref} from "vue";

const activeIndex = ref('1')
let echart = echarts;
onMounted(() => {
  initChart();
});

function initChart() {
  let chart = echart.init(document.getElementById("myEcharts"), );
  // 把配置和数据放这里
  chart.setOption({title: {
      text: '课程进度',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 15, name: '未完成课程' },
          { value: 5, name: '已完成课程' },

        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
  window.onresize = function() {
    //自适应大小
    chart.resize();
  };
}

</script>

<style>
/* 可以在这里添加样式 */
.head{
  padding: 0;
}
*{
  margin: 0;
  padding: 0;
}

.dataDetail {
  display: flex;
  justify-content: flex-end;
}

.personCard{
  width: 30%;
}
.dataCard{
  width: 70%;
  height: 480px;
}
.echarts-box{
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
