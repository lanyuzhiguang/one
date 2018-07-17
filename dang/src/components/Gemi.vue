<template>
  <div class="gemi">
    <GongHeader :back="true"></GongHeader>
    <div class="gemi-content">
      <div class="gemi-mima">旧密码：</div>
      <div class="gemi-kuang"><input type="password" v-model="info.pwd"></div>
      <div class="gemi-mima" v-model="info.newPwd">新密码：</div>
      <div class="gemi-kuang"><input type="password" v-model="info.newPwd"></div>
      <div class="gemi-mima" >确认密码：</div>
      <div class="gemi-kuang"><input type="password" v-model="queren"></div>
      <mt-button size="large" @click="postMima">确定</mt-button>
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
        info:{
          pwd:"",
          newPwd:"",

        },
        queren:"",
      }

    },
    methods:{
      postMima() {
        if (this.queren == this.info.newPwd) {
          this.$axios.post('updataMm', this.info).then(res => {
            console.log(res)
            if (res.code == 200) {
              this.$router.push('/Login')
            }
          }).catch((err) => {
            console.log(err)
          })
        }
        else{
            alert("确认密码和修改密码不一样！！！")
          }
      },
      created(){
        // this. postMima()
      }

    },

  }
</script>

<style scoped>
  .gemi{
    width: 100%;
    margin-top: 80px;}
  .gemi-content{
   margin-left: 15px;
    margin-right: 15px;

  }
  .gemi-mima{
    font-size: 18px;
    color: #666;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .gemi-kuang input{
    width: 331px;
    height: 46px;
    border: 1px solid #999;
    border-radius: 6px;
    line-height: 16px;
    font-weight: 400;
  }
  .mint-button{
    width: 98.5%;
    background-color: #ef473a;
    margin-top: 10px;
    margin-bottom: 10px;

    color: #fff;
    font-size: 14px;

  }

</style>
