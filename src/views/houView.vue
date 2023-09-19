<template>
  <div class="home">
    <div class="top">
      <div class="tops">
        <h3>30</h3>
        <span>关注人数(个)</span>
      </div>
      <div class="tops">
        <h3>120</h3>
        <span>订单信息(笔)</span>
      </div>
      <div class="tops">
        <h3>4183.80</h3>
        <span>今日订单总金额(元)</span>
      </div>
      <div class="tops">
        <h3>100</h3>
        <span>本月销量(笔)</span>
      </div>
      
    </div>
    <div class="left">
        <div class="left1">
          <div class="left1-top">
            <h4>店铺及商品展示</h4>
            <span>需要关注的店铺信息及代理处理事项</span>
          </div>
          <div class="top">
            <div class="tops">
              <h3>64</h3>
              <span>出售中</span>
            </div>
            <div class="tops">
              <h3>10</h3>
              <span>待回复</span>
            </div>
            <div class="tops">
              <h3>0</h3>
              <span>库存余量</span>
            </div>
            <div class="tops">
              <h3>3</h3>
              <span>创库中</span>
            </div>
          </div>
        </div>
        <div class="left2">
          <div class="left2-top">
            <h4>交易提示</h4>
            <span>需要立即处理的交易订单</span>
          </div>
          <div class="top">
            <div class="tops">
              <h3>0</h3>
              <span>代付款</span>
            </div>
            <div class="tops">
              <h3>10</h3>
              <span>待发货</span>
            </div>
            <div class="tops">
              <h3>0</h3>
              <span>已发货</span>
            </div>
            <div class="tops">
              <h3>3</h3>
              <span>已收货</span>
            </div>
            <div class="tops">
              <h3>3</h3>
              <span>退款中</span>
            </div>
            <div class="tops">
              <h3>3</h3>
              <span>待售后</span>
            </div>
          </div>
        </div>
        <div class="left3">
          <div class="left2-top">
            <h4>销售统计情况</h4>
            <span>按周期统计商家店铺的订单量和订单金额</span>
          </div>
          <div class="top1">
            <h3>昨日销量</h3>
            <div>
                <p>订单金额(元)12</p>
                <p>订单量(件)12</p>
            </div>
          </div>
          <div class="top1">
            <h3>本月销量</h3>
            <div>
                <p>订单金额(元)12</p>
                <p>订单量(件)12</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right1">
            <div class="right-top">
                <h4>店铺及商品展示</h4>
                <span>需要关注的店铺信息及代理处理事项</span> 
            </div>
            <div class="right-bot">

            </div>
        </div>
      </div> n
  </div>
</template>

<script setup lang="ts">
import { leftApi } from "../api/index";
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
// const page = reactive(1);

// const getleft = () => {
//   leftApi(page).then((res: any) => {
//     console.log(res);
//   });
// };
// getleft()
</script>

<style lang="scss" scoped>
.right{
    width: 45%;
    height: 250px;
    position: fixed;
    background-color: white;
    right: 2%;
    top: 61%;
    .right1 {
    width: 80%;
    background-color: white;
    height: 150px;
    padding: 10px 10px;
    box-sizing: border-box;
    .right-top {
        width: 100%;
      display: flex;
      justify-content: space-between;
      span {
        color: #26a241;
      }
    }
}
}
.home {
  width: 100%;
  height: 100vh;
}
.left {
  width: 50%;
  height: calc(100vh - 80px);
  position: fixed;
  top: 20%;
  left: 11%;
  .left1 {
    width: 80%;
    background-color: white;
    height: 150px;
    padding: 10px 10px;
    box-sizing: border-box;
    .left1-top {
      display: flex;
      justify-content: space-between;
      span {
        color: #26a241;
      }
    }
    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      .tops {
        width: 120px;
        display: flex;
        flex-direction: column;
        height: 70px;
        background-color: #f8f8f8;
        box-shadow: 0 0 1px 0 #ccc;
        padding: 10px 10px;
        box-sizing: border-box;
      }
    }
  }
  .left2 {
    margin-top: 40px;
    width: 80%;
    background-color: white;
    height: 150px;
    padding: 10px 10px;
    box-sizing: border-box;
    .left2-top {
      display: flex;
      justify-content: space-between;
      span {
        color: #26a241;
      }
    }
    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      .tops {
        width: 80px;
        display: flex;
        flex-direction: column;
        height: 70px;
        background-color: #f8f8f8;
        box-shadow: 0 0 1px 0 #ccc;
        padding: 10px 10px;
        box-sizing: border-box;
      }
    }
  }
  .left3 {
    margin-top: 40px;
    width: 80%;
    background-color: white;
    height: 250px;
    padding: 10px 10px;
    box-sizing: border-box;
    .left2-top {
      display: flex;
      justify-content: space-between;
      span {
        color: #26a241;
      }
    }
    .top1{
        width: 80%;
        height: 70px;
        border: 1px solid #ccc;
        margin-top: 15px;
        display: flex;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            p{
                width: 100%;
                // border-bottom: 1px solid #ccc;
                
            }
        }
    }
  }
}
.top {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .tops {
    width: 400px;
    display: flex;
    flex-direction: column;
    height: 70px;
    background-color: #fefefe;
    box-shadow: 0 0 1px 0 #ccc;
    padding: 10px 10px;
    box-sizing: border-box;
  }
}
</style>