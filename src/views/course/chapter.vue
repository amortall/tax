<script setup>


const dirList = [
    '企业纳税准备阶段',
    '增值税',
    '消费税',
    '企业所得税',
    '个人所得税',
    '财产行为税'
]

</script>

<template>
  <div>
    <el-card class="directory">
      <div class="card-header">
        <h1 style="font-size: 40px;margin-bottom: 3%">已完成3/6</h1>
        <h3 style="font-size: 32px;color: #F2F3F5;margin-bottom: 3%">目录</h3>
      </div>
      <div v-for="(item,index) in dirList" class="textItem">{{ (index + 1) + '、' + item}}</div>
    </el-card>
  </div>



</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.directory{
  display: flex;
  flex-flow: column;
  justify-content: start;
  background-color: #36A5BB;
  height: 89vh;
  border-radius: 10px;
}

.card-header{
  display: flex;
  flex-flow: column;
  align-items: start;
}

.textItem{
  background-color: aliceblue;
  margin: 30px;
  padding: 10px;
  text-align: start;
  font-weight: bold;
  font-size: 32px;
}
</style>
