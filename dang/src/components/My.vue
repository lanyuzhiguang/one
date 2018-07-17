<template>
  <div>
    <Tab></Tab>
    <GongHeader :back="false"></GongHeader>
    <div class="Mycontent">
    <div class="Mylogin">
      <div class="Mylogin-tu" >
        <img :src="item.img">
      </div>
      <div class="Mylogin-zi" >
        <router-link to="Login" v-text="item.name">你还没有登录，请登录</router-link>
      </div>
    </div>
      <div>
      <div class="Myliebiao"  @click="isaLogin">
        <router-link to="Gexi">
        <img src="../image/geren.png" >
       <i class="Myliebiao-zi">个人信息</i>
          <i class="iconfont icon-xiayibu"></i>
        </router-link>
      </div>
      <div class="Myliebiao"  @click="isbLogin">
        <router-link to="Gefen">
          <img src="../image/lianghua.png" >
          <i class="Myliebiao-zi">个人量化积分</i>
          <i class="iconfont icon-xiayibu"></i>
        </router-link>
      </div>
      <div class="Myliebiao"  @click="iscLogin">
        <router-link to="Gemi">
          <img src="../image/suo.png" >
          <i class="Myliebiao-zi">修改密码</i>
          <i class="iconfont icon-xiayibu"></i>
        </router-link>
      </div>
      <div class="Myliebiao"  @click="iseLogin">
        <router-link to="Gefei">
          <img src="../image/icon3.png" >
          <i class="Myliebiao-zi">党费缴纳</i>
          <i class="iconfont icon-xiayibu"></i>
        </router-link>
      </div>
      </div>
     <router-link to="Login" class="my-deng">
        <mt-button size="large" @click="outLogin" v-if="isShow">退出登录</mt-button>
     </router-link>

    </div>
  </div>
</template>

<script>
  import Tab from "../base/Tab.vue"
  import GongHeader from "../base/GongHeader.vue"
    export default {

      components: {
        Tab,
        GongHeader
      },
      data() {
        return {
          isShow: false,
         item:{}
        }
      },
      mounted(){
        this.isdLogin();
        this.getuser();

      },
      methods:{
        getuser(){
          this.$axios.get("getQian").then(res => {
            console.log(res[0])
            this.item = res[0];
          })
        },
        outLogin(){
          this.$axios.get("logout").then(res => {
            this.$router.push('/Login');
          })
        },
        isaLogin(){
          this.$axios.get("isLogin").then(res => {
            if(!res.ret){
              this.$router.push('/Login')
            } else {
              this.$router.push('/Gexi')

            }
          })
        },
        isbLogin(){
          console.log(67777)
          this.$axios.get("isLogin").then(res => {
            if(!res.ret){
              this.$router.push('/Login')
            } else {
              this.$router.push('/Gefen')

            }
          })
        },
        iscLogin(){
          console.log(67777)
          this.$axios.get("isLogin").then(res => {
            if(!res.ret){
              this.$router.push('/Login')
            } else {
              this.$router.push('/Gemi')

            }
          })
        },
        iseLogin(){
          console.log(67777)
          this.$axios.get("isLogin").then(res => {
            if(!res.ret){
              this.$router.push('/Login')
            } else {
              this.$router.push('/Gefei')

            }
          })
        },
        isdLogin(){
            this.$axios.get("isLogin").then(res => {
              console.log(res)
              if(!res.ret){
              } else {
                this.isShow=true;
              }
            })
          },
        // loginfan(){
        //   this.$router.push({path:'/Login',query:{mark:"My"}});
        // },
      }
    }
</script>

<style scoped>
  .Mycontent{
    width: 100%;
  height: 576px;}
.Mylogin{
  background: #c7000a;
  width: 100%;
  height: 200px;
  text-align: center;

}
 .Mylogin-tu{
   position: absolute;
   top: 60px;
   left: 160px;
   width: 62px;
   height: 62px;
   background-image: url("../image/bt_bg.png");
   border-radius: 50%;
   background-size:62px 62px;
   background-repeat: no-repeat;
}
  .Mylogin-tu img{
    width: 100%;
    height:100%;
    border-radius: 50%;
  }
.Mylogin-zi{
  position: absolute;
  top: 125px;
  width: 100%;
  height: 10px;
}
.Mylogin-zi a{
  color: #fff;
  font-size: 14px;
text-align: center;
padding-top: 10px;}
  .Myliebiao{
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #aaaaaa;
  }
  .Myliebiao img{
   position :absolute;
    border-radius: 50%;
    left: 5px;
    margin-top: 8px;
    width: 40px;
    height: 40px;
  }
  .Myliebiao-zi{
    position :absolute;
    left:50px;
    margin-top: 14px;
    font-size: 16px;
    color: #666;
    font-style: normal;
  }
  .Myliebiao .iconfont{
    position :absolute;
    right :10px;
    margin-top: 10px;
    font-size: 30px;
    color: #aaaaaa;
  }

  .my-deng .mint-button{
    background: #ef473a;
    height: 47px;
    color: #fff;
    font-size: 16px;
    margin: 30px 3%;
   width: 94%;


  }




</style>
