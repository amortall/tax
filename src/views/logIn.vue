<template>
  <div style="display: flex;justify-content: center;align-items: center;height: 100vh">
    <el-card class="main" body-style="padding:0;">
      <el-row class="login">
        <el-col :span="14">
          <el-image :src="myImage" style="height: 100%">
          </el-image>
        </el-col>
        <el-col :span="10">
          <el-card style="height: 100%;display: flex;align-items: center;justify-content: center">
            <p style="text-align: center;margin-bottom: 60px;color:#3B6075;font-weight: bold;font-size: 40px">
              税友在线培训
            </p>

            <el-form>
              <el-form-item style="margin-bottom: 20px">
                <el-input v-model="email" placeholder="请输入邮箱">

                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="vertifyCode" placeholder="请输入验证码">
                  <template #append>
                    <el-button @click="onSendCode">
                      发送验证码
                    </el-button>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
            <el-row justify="center" style="margin-top: 30px">
              <el-button class="login_btn" @click="onLoginClick" type="primary" style="width: 100%;font-size: 12px">
                登录
              </el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import {ref} from 'vue';
// import axios from 'axios';
import myImage from '@/assets/Images/img.png'
import {useRouter} from "vue-router";
// import axios from 'axios';

const router = useRouter();
const email = ref("");
const vertifyCode = ref("");
// const onSendCode = () => {
//   email
// }
const onLoginClick = () => {
  router.push('/homeIndex')
  // // 发送数据到后端
  // axios.defaults.baseURL = '/api'
  // axios.get('/send?email='+email.value)
  //     .then(response => {
  //       // 处理成功响应
  //       console.log(response);
  //
  //     })
  //     .catch(error => {
  //       // 处理错误
  //       console.error(error);
  //     });

  // router.push({path:'/Home'})
}


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}


.main {
  width: 800px;
  border-radius: 36px
}

.login {
  justify: "space-between"
}
</style>