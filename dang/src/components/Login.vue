<template>
    <div class="login-content">
      <mt-header fixed  >
        <mt-button  icon="back" @click="$router.push('/My')" slot="left"  ></mt-button>
      </mt-header>
      <div class="login-img">
        <img src="../image/logo.png" alt="">
      </div>
      <div class="form">
        <div class="login-san"><input type="text" placeholder="身份证号" v-model="info.idNum">
        </div>
        <div class="login-san"><input type="password" placeholder="密码" v-model="info.pwd">
        </div>
        <div class="login-san">
          <mt-button @click="Login()" size="large" >登录</mt-button>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
      data(){
     return{
       info:{
         idNum:"",
         pwd:""
       }
     }
      },
      methods:{
          Login(){
            this.$axios.post('Login',this.info).then(res=>{
                this.$router.push("/Home")
            })
          },
        // Login(){
        //   this.changepath='/'+this.$router.query.mark;
        //   this.$axios.post('Login',this.info).then(res=>{
        //     // console.log(res.data)
        //     if (res.code==200) {
        //       this.$router.push({path:this.changepath})
        //       // this.$router.push(path:'/Login',query:{mark:""})
        //     }
        //   })
        // },
      }
    }
</script>
<style scoped>
  .mint-header{
    background:#c7000a;
    font-size: 18px;
    height: 43px;
    margin:0;}

  .login-content{
    background:#c7000a;
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
  }
  .login-img{
    display: block;
    position: absolute;
    top:70px;
    left:80px;
  }
  .login-content img{
    width: 203px;
    height: 49px;
  }
.form{
  position: fixed;
  margin-top: 150px;
  margin-left: 35px;
 }

  .login-san input{
    width:300px;
    border: 1px solid #ff0;
    border-radius: 8px;
    background:#c7000a;
    margin-top: 10px;
    height:41px;
    font-size: 14px;

  }
  ::-webkit-input-placeholder
  {
    color: #fff;
    padding-left: 8px;
  }
 .login-san .mint-button {
    width: 100%;
    padding: 5px;
    border-radius: 4px;
    background:#e43228;
    margin-top: 10px;
    color: #fff;
  }
</style>
