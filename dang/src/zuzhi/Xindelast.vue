<template>
  <div>
    <GongHeader :back="true"></GongHeader>
    <div class="content">
      <img src="../image/reviewing.png" alt="">
      <p>正在审核中</p>
      <router-link to="Organization">
        <div class="guanbi">
          关闭
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
  export default {
    components:{

      GongHeader
    },
  }
</script>

<style scoped>
  .content{
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    color: #aaa;
  }
  .content img{
    width: 92px;
    height: 92px;
    padding: 15px;
  }
  .guanbi{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 40px;
    border-radius: 8px;
    background: #c7000a;
    font-size: 16px;
    color: #fff;
    margin-top: 100px ;
  }

</style>
