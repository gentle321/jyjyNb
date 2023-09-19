<template>
  <div class="guan">
    <div class="left">
      <div class="lefts">
        <div class="left-item" v-for="(item,index) in list" :key="index" :class="active==index?'green':''" @click="getright(item.id,index)">
          <span>{{ item.name }}</span>
          <el-dropdown>
            <el-button type="primary">
              {{ item.images_count }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="del">删除</el-dropdown-item>
                <el-dropdown-item>修改</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="rights">
        <div class="right-item" v-for="(item,index) in imgUrl" :key="index">
          <img :src="item.url" alt="">
          <div class="block">{{ item.path }}</div>
          <div class="bot">
            <el-button type="default" :icon="View" @click="open(item.url)" />
            
            <el-button type="default" :icon="EditPen" @click="edit(item.path)"  />
            
            <el-button type="default" :icon="Delete"  />
            
          </div>
        </div>
      </div>
      <div v-show="flag" class="flag">
    <span @click="flag=false">
      X
    </span>
    <img :src="imgurl" alt="">
  </div>
    </div>
    <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>请输入新名称</span>
    <el-form :model="form" label-width="10px">
    <el-form-item>
      <el-input v-model="form.name" />
    </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="add">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  
  </div>
</template>

<script setup lang="ts">
import {
  View,EditPen,Delete
} from '@element-plus/icons-vue'
import { leftApi , rightApi } from "../api/index";
import { ref, reactive } from "vue";
import { ElMessage ,ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const flag = ref(false)
const limit = ref<number>(10);
const page = ref(1);
const list = ref<any[]>([]);
const active = ref(0)
const getleft = () => {
  console.log(1);
  leftApi({ page: page.value, limit: limit.value }).then((res: any) => {
    console.log(res);
    list.value = res.data.data.list;
  });
};
getleft();
const imgUrl = ref<any[]>([])
const getright = (id:number,index:number)=>{
  active.value = index
  rightApi({page:page.value,limit:limit.value,id:id}).then((res:any)=>{
    console.log(res);
    imgUrl.value = res.data.data.list
  })
}
getright(564,0)

const del = () =>{
  ElMessageBox.confirm(
    '确定要删除吗?',
    '删除',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'error',
        message: '演示数据，禁止操作',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
const dialogVisible = ref(false)
const form = reactive({
  name:''
})
const edit = (name:string) =>{
  dialogVisible.value = true
  form.name = name
}
const add = () =>{
  ElMessage.error('数据演示，禁止操作')
  dialogVisible.value = false
}

const imgurl = ref('')
const open = (url:string) =>{
  flag.value = true
  imgurl.value = url
}

</script>

<style lang="scss" scoped>
.flag{
  position: fixed;
  width: 70%;
  height: 100vh;
  top: 0%;
  background-color: rgba(0, 0, 0, 0.299);
  img{
    width: 100%;
    height: 80px;
  }
}
.green{
  background-color: #eff7ea;
    width: 100%;
  height: 60px;
  color: greenyellow;
  border-bottom: 1px solid #d7e6d0;
}
.guan {
  width: 100%;
  display: flex;
  .left {
    width: 20%;
    height: 100vh;
    background-color: white;
    .lefts{
      width: 100%;
      height: 100vh;
      padding: 10px 10px;
      box-sizing: border-box;
      .left-item{
        border-top: 1px solid #ebebeb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
      }
    }
  }
  .right{
    width: 78%;
    height: 100vh;
    .rights{
      width: 100%;
      height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .right-item{
        width: 19%;
        height: 220px;
        box-shadow: 0px 1px 0px 1px #cdcdd1;
        background-color: white;
        padding: 5px 5px;
        box-sizing: border-box;
        // position: fixed;
        img{
          width: 100%;
          height: 140px;
        }
        .block{
          width: 100%;
          height: 30px;
          color: white;
          // margin-top: 5px;
          // top: 10%;
          background-color: rgba(0, 0, 0, 0.53);
        }
        .bot{
          display: flex;
          margin-left: 50px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>