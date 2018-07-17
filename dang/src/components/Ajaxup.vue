<template>
  <div>
    <GongHeader :back="true"></GongHeader>
  <div class="container" >
    <label id="btn-wrap">
    <input type="file" name="file" accept="image/jpeg,image/png"@change="up" id="file-input">
      <i class="iconfont icon-jiahao"></i>
    <img  :src="img" v-if="img">
    </label>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GongHeader from "../base/GongHeader.vue"
  export default {
    components:{
      GongHeader
    },
      data(){
          return{
            token:'',
            img:''
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
              this.img=res.data.url;
            })
          },
        getToken(){
            axios.get("http://up.yaojunrong.com/getToken").then(res=>{
              this.token=res.data.data;
            })
          }
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
</style>
