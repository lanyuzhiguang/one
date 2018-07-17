<template>
  <div class="content">
    <Tab></Tab>
     <div class="header">
       <div class="header-img"><img src="../image/logo.png" alt=""></div>
       <router-link to="/login">
         <span v-if="isShow">登录</span>
       </router-link>
     </div>
    <div class="swipe">
      <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="item in arr"  :key="item.id" >
          <router-link  :to="'/Luncontent?id='+ item._id">
          <img :src="item.img">
          <span >{{item.title}}</span>
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="liu">
      <div class="row">
        <router-link to="News" class="row-a">
          <div>
            <img src="../image/icon_01.png" alt="">
          </div>
          <div class="liu-title"> 信工新闻眼</div>

        </router-link>
        <router-link to="Organization"class="row-a">
              <div>
                <img src="../image/icon_03.png" alt="">
              </div>
              <div class="liu-title">掌上组织生活</div>

            </router-link>
            <div @click="isaLogin">
            <router-link to="Yun" class="row-a" >
              <div>
                <img src="../image/icon_05.png" alt="">
              </div>
              <div class="liu-title" >党员云互动</div>
            </router-link>
        </div>
      </div>
      <div class="row">
        <router-link to="Yidian" class="row-a">
          <div>
            <img src="../image/icon_04.png" alt="">
          </div>
          <div class="liu-title">党建一点通</div>

        </router-link>
        <router-link to="Id" class="row-a">
          <div>
            <img src="../image/icon_06.png" alt="">
          </div>
          <div class="liu-title">党员亮身份</div>

        </router-link>
        <router-link to="Today" class="row-a">
          <div>
            <img src="../image/icon_02.png" alt="">
          </div>
          <div class="liu-title">党史的今天</div>

        </router-link>
      </div>
    </div>
    <div class="chuntu" >
      <img src="../image/chuntu.jpg" alt="">
    </div>
  <div class="wufentu">
    <div class="fentu-left">

    </div>
    <div class="fentu-right">
      <div class="fentu-row">
        <router-link to="Study"></router-link>
        <router-link to="Pai"></router-link>
      </div>
      <div class="fentu-row">
        <router-link to="Jian"></router-link>
        <router-link to="Te"></router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Tab from "../base/Tab.vue"

  export default {
    components:{
     Tab,
    },
    data(){
      return{
        arr:[],
        isShow: true,
      }
    },
    mounted(){
      this.getSwipe();
      this.isdLogin()
    },
    methods: {
      getSwipe() {
        this.$axios.get("getQianLunBoTus",).then(res => {
          console.log(res)
          this.arr = res;
        })
      },
      isdLogin(){
        this.$axios.get("isLogin").then(res => {
          console.log(res)
          if(!res.ret){
          }
          else {
            this.isShow=false;
          }
        })
      },
      isaLogin(){
        console.log(67777)
        this.$axios.get("isLogin").then(res => {
          if(!res.ret){
            this.$router.push('/Login')
          } else {
            this.$router.push('/Yun')
          }
        })
      },
    },
     }
</script>

<style scoped >
  .content{
    padding-bottom:49px;
    padding-top: 44px;}
  .header{
    position: fixed;
    left: 0;top: 0;
    z-index: 1000;
    background:#c7000a;
    width:100%;
    height: 44px;
    font-size: 18px;
  }
  .header .header-img{
    float: left;
  }
  .header img{
    width:146px;
    height: 30px;
    margin: 5px 0 5px 5px;
  }
  .header span {
    display: block;
    color: #fff;
    float: right;
    margin: 10px;
    font-size: 18px;
  }
  .swipe{
    height:187.5px;
  }

.swipe img{
  display:block;
  width:100%;
  height: 100%;
  position: absolute;
}
  .swipe span{
    position: relative;
    display: block;
    color: #fff;
    margin: 140px 10px  10px 20px;

  }
.liu{
  background-image: url("../image/bt_bg.png");
  background-repeat: no-repeat;
  background-size:100%;
  height: 198px;
}
 .row{
   display: flex;
   justify-content: space-around;
   padding: 10px 15px;
   font-size: 14px;
 }
 .row-a img{
   width: 50px;
   height:50px;
 }
 .row-a{
   display: flex;
   flex-direction:column;
   align-items: center;
   color: #aaaaaa

 }
  .chuntu{
    width:100%;
    height: 100px;
    margin: 0;
    display: block;
  }
  .chuntu img{
    width:100%;
    height: 100%;
    margin: 0;
    display: block;
  }

  .wufentu {
    display:flex;
    background-image: url("../image/wu.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 182px;}
  .fentu-left{flex:1;}
  .fentu-right{flex:2;}
  .fentu-row{display:flex;height:50%;}
  .fentu-row a{flex: 1;height:100%;}
</style>
