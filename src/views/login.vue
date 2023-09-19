<template>
  <div class="login">
    <div class="enroll">
      <div class="top">
        <span>UNI-ADMIN</span>
      </div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="10px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
            <el-button class="btn" type="success" @click="login">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {loginApi} from '../api/index'
import { ref, reactive } from "vue";
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter();
const ruleForm = ref({
  username: "",
  password: ""
});
const formSize = ref('default')
const rules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});
const info = ref(JSON.parse(localStorage.getItem('info') as any))
const login = () =>{
    loginApi(ruleForm.value).then((res:any)=>{
        console.log(res);
        const token = res.data.data.token
        localStorage.setItem('token', token)
        localStorage.setItem('info', JSON.stringify(res.data.data))
        ElMessage.success('登录成功')
        router.push('/')
    })
}

</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow: hidden;

  .enroll {
    border: 1px solid #e3e3e3;
    width: 500px;
    height: 300px;
    margin: 200px auto;
    .top {
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 25px;
      text-align: center;
      border-bottom: 1px solid #e3e3e3;
    }
    .el-form{
        margin-top: 20px;
        .btn{
            width: 100%;
        }
    }
  }
}
</style>