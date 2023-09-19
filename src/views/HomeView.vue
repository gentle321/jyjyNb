<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h3>UNI-ADMIN</h3>
        <div class="lefts">
          <div class="left">
            <div class="left-item" v-for="(item,index) in info.tree" :key="index">{{ item.name }}</div>
          </div>
          <el-avatar
        :src="info.avatar
"
      />
      <span @click="exit">{{ info.username }}</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#fefefe"
            class="el-menu-vertical-demo"
            default-active="2"
            router
            text-color="#545c63"
          >
            <el-menu-item index="/houView">后台首页</el-menu-item>
            <el-menu-item index="/guanLi">相册管理</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { leftApi } from "../api/index";
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

const info = ref(JSON.parse(localStorage.getItem("info") as any));


const exit = () =>{
  router.push('/login')
  localStorage.removeItem('token')
}

// console.log(info.value);
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 50px;
  background-color: #545c63;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .lefts {
    display: flex;
    align-items: center;
    .left{
      display: flex;
      .left-item {
      margin-left: 10px;
    }
    }
    
  }
}
.el-menu {
  height: calc(100vh - 50px);
}
.el-main{
  width: 100%;
  height: 100vh;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: #f8f8f8;
}
</style>
