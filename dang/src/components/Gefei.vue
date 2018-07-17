<template>
  <div class="gefei">
    <GongHeader :back="true"></GongHeader>
    <div class="gefei-content">
      <div class="gefei-ti">请选择支付方式</div>
      <div class="geifei-yi">
      <div class="gefei-one">
        <div class="gefei-weixin" @click="handlewei">
          <span class="gefei-left">
            <span class="weixin"> <i  class="iconfont icon-weixinzhifu"></i> </span>
            <span class="gefei-left-zi"> 微信</span>
           </span>
          <span class="gefei-right"><i class="iconfont icon-xiayibu"></i></span>
        </div>
      </div>
      </div>
      <div class="geifei-yi">
        <div class="gefei-one">
          <div class="gefei-weixin" @click="handlezhi">
          <span class="gefei-left">
            <div class="zhufubao"><i  class="iconfont icon-zhifubao"></i></div>
            <span class="gefei-left-zi"> 支付宝</span>
           </span>
            <span class="gefei-right"><i class="iconfont icon-xiayibu"></i></span>
          </div>
        </div>
        <mt-popup v-model="popupVisible" >
          <div class="zhifu" v-if="wei">
            <p>微信支付</p>
            <img src="../image/wechat.png">
          </div>
          <div class="zhifu" v-if="bao">
            <p>支付宝支付</p>
            <img src="../image/alipay.png">
          </div>
        </mt-popup>
      </div>
    </div>
  </div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
  export default {
    components:{

      GongHeader
    },
    data(){
      return{
      popupVisible:false,
      wei:false,
      bao:false

    }
    },
    methods: {

      handlewei() {
        this.popupVisible=true,
          this.wei=true,
          this.bao=false
      },
      handlezhi() {
        this.popupVisible=true,
          this.wei=false,
          this.bao=true
      },
    }
  }
</script>

<style scoped>
  .gefei{
    margin-top: 40px;
    width: 100%;
  }
  .gefei-ti{
    font-size: 15px;
    border-bottom: 1px solid #aaa;
    line-height: 2.5;
    color: #757575;
    padding: 10px 5px;
  }
  .gefei-weixin{
    height: 42px;
    border-bottom: 1px solid #aaa;
    padding: 10px;
  }
  .gefei-left{
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: space-between;
    float: left;
  }
  .weixin .iconfont{
    font-size: 40px;
    color: #6cc143;
  }
  .gefei-left-zi{
    font-size: 16px;
    color: #a7a7a7;
  }
  .gefei-right .iconfont{
    font-size: 40px;
    color: #d2d2d2;
    float: right;
    line-height:42px;
  }
  .zhufubao .iconfont{
    font-size: 40px;
    text-align: center;
    color: #1296db;
  }
</style>
