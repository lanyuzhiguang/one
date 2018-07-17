<template>
  <div class="hu">
    <div>
      <div class="mint-button" @click="ddd">
        <mt-palette-button content="+" mainButtonStyle="background-color: red;color:#fff;">
          <div class="my-icon-button"></div>
        </mt-palette-button>
      </div>

      <mt-popup v-model="abc" modal=false position="bottom" class="fugai">
        <div class="zhifu">
          <form action="" class="tijiao">
            <textarea name="a" style="width:100%;height: 100px;border: none;border-radius: 2px"></textarea>
            <div>
              <button class="fa">发布</button>
              <button class="qu">取消</button>
            </div>
          </form>
        </div>
      </mt-popup></div>
    <div class="hujie">
      <div class="liuhu">
        <div class="ltoubu">
          <img src="../img/1.png" class="yuantou">
          <div class="stou">
            <p class="nic">text6</p>
            <p class="time">
              <span><i class="iconfont icon-shijian"></i></span>
              <span>2018-03-09 13:12:09</span>
              <span><i class="iconfont icon-laba"></i></span>
              <span>公开</span>
            </p>
          </div>
          <p class="dangyuan">党员互动</p></div>
        <p class="lnr">支持我党</p>
        <router-link to="/huif" class="huif">
          <p><i class="iconfont icon-message"></i>
            <span>回复</span>
          </p>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    components:{
      MyHeader},


  }
</script>

<style>
  .my-icon-button{
    background-color: red;
  }
  .mint-button{
    height: 70px;
    left: 78%;
    bottom: 5%;
    position: fixed;
    z-index: 10;
  }
  .zhifu{
    width: 100%;
    height: 160px;
    background-color: #f1f1f1;
  }
  .hu .fugai{
    width: 100%;
  }
  .hu{
    width: 100%;
    position: absolute;
    background-color: #EFEFF4;
  }
  .tijiao{
    padding: 14px
  }
  .fa{
    border-radius: 2px;
    border: none;
    background-color: #ef473a;
    color: #fff;
    height: 31px;
    font-size: 12px;
    width: 34px;
  }
  .qu{
    float: right;
    border-radius: 2px;
    border: none;
    background-color: #fff;
    height: 31px;
    font-size: 12px;
    width: 34px;
  }
  .hujie{
    position: relative;
    top: 48px;
    margin-bottom: 15px;
    width: 100%;
    background-color: #fff;

  }
  .liuhu img{
    width: 30px;
    height: 30px;
    float: left;
    border-radius: 50%;
    margin: 15px;
  }
  .stou{
    float: left;
    margin: 15px;
    margin-left: 0;
  }
  .stou .nic{
    font-size: 18px;
    margin-bottom:3px;
  }
  .stou .time{
    font-size: 12px;
  }
  .stou .iconfont{
    font-size: 12px;
  }
  .ltoubu{
    height: 65px;
    width: 100%;
  }
  .dangyuan{
    height: 26px;
    width: 66px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    /*padding: 2px 8px;*/
    color: red;
    border: 1px solid red;
    border-radius: 15%/50%;
    position: fixed;
    right: 10px;
    margin-top: 10px;
  }
  .lnr{
    margin: 10px 15px;
    font-size: 16px;
  }
  .huif{
    text-align: right;
    /*position: fixed;*/
    /*right: 15px;*/
    /*font-size: 14px;*/
  }
  .huif p{
    padding-right: 15px;
    padding-bottom: 15px;
  }
  .huif .iconfont{
    font-size: 14px;
  }

</style>

