<script setup>
const dirList = [
  '论述如何正确进行税费登记',
  '企业纳税准备阶段单元作业',
  '如何进行纳税人身份判定',
  '增值税单元作业',
  '消费税单元作业',
  '企业所得税单元作业',
  '个人所得税单元作业',
  '财产行为税单元作业'
]

</script>

<template>
  <el-card class="directory">
    <div class="card-header">
      <h1 style="font-size: 40px;margin-bottom: 3%">2023-2024-1</h1>
      <h3 style="font-size: 32px;color: #F2F3F5;margin-bottom: 3%">目录</h3>
    </div>
    <ul class="content">
      <li v-for="(item,index) in dirList" class="textItem">
        <div class="indexBox" style="font-size: 48px">
          {{ `${index + 1}`.padStart(2, '0') }}
        </div>
        <div class="dirItem">
          <h3 style="font-size: 32px;margin-left: 20px">{{ item }}</h3>
          <h5 style="font-size: 28px;color: #D4D7DE;margin-left: 20px;: ">已完成</h5>
        </div>
      </li>
    </ul>

  </el-card>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.directory {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background-color: #36A5BB;
  height: 89vh;
  border-radius: 10px;
}

.card-header {
  display: flex;
  flex-flow: column;
  align-items: start;
}

.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  margin-top: 20px;
}

.textItem {
  display: flex;
  justify-content: start;
  width: 50%;
  margin: 20px 0 20px 0;
}

.indexBox {
  display: flex;
  background-color: aliceblue;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}

.dirItem {
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: start;
}
</style>
