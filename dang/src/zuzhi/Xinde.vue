<template>
  <div>
    <GongHeader :back="true"></GongHeader>
    <div class="container" >
      <div class="shangchuan">
        <label id="btn-wrap">
          <input type="file" name="file" accept="image/jpeg,image/png"@change="up" id="file-input">
          <i class="iconfont icon-jiahao"></i>
        </label>
        <img  :src="item.img" v-if="item.img">
      </div>

      <router-link to="">
        <div class="tijiao" @click="heartstu">
          提交审核
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GongHeader from "../base/GongHeader.vue"
  import { Toast } from 'mint-ui';
  export default {
    components:{
      GongHeader
    },
    data(){
      return{
        token:'',

        item:{
          img:'',
          id:''
        }
      }
    },
    methods:{
      up($event){
        console.log($event)
        var file = $event.target.files[0];
        var form =new FormData();
        form.append("file",file);
        form.append("token",this.token)
        axios.post("http://upload-z1.qiniup.com",form,{headers:{"Content-Type":"multipart/form-data"}}).then(res=>{
          console.log(res)
          this.item.img=res.data.url;
        })
      },
      getToken(){
        axios.get("http://up.yaojunrong.com/getToken").then(res=>{
          this.token=res.data.data;
        })
      },
      heartstu(){
          this.$axios.post('addZhangPics',{name: "心得总结", img: this.item.img}).then(res=>{
            if (res.code==200){
              console.log(res)
              this.$router.push('/Xindelast')
            }
            else{
              Toast({
                message: '不能重复提交个人总结',
                duration: 1000
              });
            }
          })
      },
    },
    created(){
      this.getToken();
    }

  }
</script>

<style scoped>
  .container{
    padding-top: 45px;
    padding-bottom: 56px;
  }
  #file-input{
    display: none;
  }
  #btn-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #aaa;
    margin-top: 15px;
    margin-left: 15px;
  }
  .icon-jiahao{
    font-size:80px;
    color: #aaa;
  }
  .tijiao{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 40px;
    border-radius: 8px;
    background: #c7000a;
    font-size: 16px;
    color: #fff;
    margin: 300px 20px 0px 60px;
  }
  .shangchuan{
    display: flex;
    flex-wrap: wrap;

  }
  .shangchuan img{
    width: 100px;
    height:100px;
    margin-top: 15px;
    margin-left: 30px;





  }
</style>
