<template>
  <div class="gefen" >
    <GongHeader :back="true"></GongHeader>
    <div class="gefen-content">
      <div class="gefen-tu">
        <img src="../image/jifen.png" alt="">
        <div class="shuzi"><span>14</span></div>
      </div>
      <div class="gefen-ming">
        <router-link  to="Mingxi" >
        <div class="gefen-ming-left">
          <span class="gefen-ming-tu">
          <img src="../image/lianghua.png" alt="">
          </span>
          <span class="gefen-ming-zi">
         积分明细
          </span>
        </div>
        <span class="iconfont icon-xiayibu"></span>
        </router-link>
      </div>
        <div class="gefen-one-yi">
        <div class="gefen-left-yi">积分规则</div>
        <div class="gefen-right-yi">
          <img src="../image/wenhao.png" alt="">
        </div>
      </div>
      <div class="gefen-yiyang">
        <div class="gefen-one-er">
        <div class="gefen-left-er">登陆APP</div>
        <div class="gefen-right-er">5</div>
      </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">完善个人信息</div>
          <div class="gefen-right-er">2</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">查看个人信息</div>
          <div class="gefen-right-er">2</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">查看积分</div>
          <div class="gefen-right-er">1</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">按时交纳党费</div>
          <div class="gefen-right-er">10</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">查看通知</div>
          <div class="gefen-right-er">2</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">了解学院动态</div>
          <div class="gefen-right-er">5</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">上交思想汇报经审核通过</div>
          <div class="gefen-right-er">5</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">主动学习相关文件</div>
          <div class="gefen-right-er">10</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">认真撰写总结并上交，经审核通过</div>
          <div class="gefen-right-er">5</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">提交个人总结，并参与评议</div>
          <div class="gefen-right-er">2</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">积极参与互动</div>
          <div class="gefen-right-er">5</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">学习党建知识</div>
          <div class="gefen-right-er">5</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">学习党史</div>
          <div class="gefen-right-er">5</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">创先争优事迹</div>
          <div class="gefen-right-er">10</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">学党章，学习近平总书记系列讲话</div>
        <div class="gefen-right-er">10</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">用镜头记录两学一做过程中令人感动的人和事</div>
          <div class="gefen-right-er">3</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">关注并积极参与特色活动</div>
          <div class="gefen-right-er">5</div>
        </div>
        <div class="gefen-one-er">
          <div class="gefen-left-er">制度化、常态化建设</div>
          <div class="gefen-right-er">5</div>
        </div>
      </div>
    </div>
    <div class="gefen-dibu">

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
 .gefen{
   width: 100%;
   margin-top: 42px;
 }
 .shuzi{
  position:absolute;
   top: 110px;
   left: 168px;
   font-size: 16px;
   color: #fff;
 }
  .gefen-tu img{
    width: 100%;
    height: 145px;
  }
  .gefen-ming{
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #aaa;
    border-top: 1px solid #aaa;

  }
  .gefen-ming-left{
    float: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 130px;
    margin-top: 12px;
  }
  .gefen-ming-left img{
    width: 32px;
    height: 32px;
  }
  .gefen-ming-zi{
    font-size: 16px;
    color: #666;
  }
 .iconfont{
   line-height: 54px;
   float: right;
   font-size:28px;
   color: #666;
 }
  .gefen-one-yi{
    height: 34px;
    border-bottom: 1px solid #aaa;
    background: #eeeeee;
    padding-left: 10px;
    padding-right: 10px;
  }
 .gefen-left-yi {
   font-size: 16px;
   color: #444444;
   float: left;
   line-height: 34px;
 }
 .gefen-right-yi{
   float: right;
   margin-top: 6px;
 }
 .gefen-right-yi img{
   width: 22px;
   height: 22px;
 }
 .gefen-one-er{
   padding-right: 10px;
   padding-left: 10px;
   height: 34px;
   border-bottom: 1px solid #aaa;
 }
 .gefen-left-er{
   font-size: 14px;
   color: #999999;
   line-height: 34px;

 }
 .gefen-right-er{
   font-size: 14px;
   color: #ff4a4a;
   line-height: 34px;
   text-align: right;

 }
 .gefen-dibu{
   position: fixed;
   height: 54px;
   background: #efeff4;
   bottom: 0px;
   width: 100%;

 }



</style>
