<template>
<div class="bianji-baocun">
  <div class="baocun-header">
    <div class="iconfont icon-fanhui1" @click="$router.push('/My')"></div>
    <div class="zhongjian">修改个人信息</div>
    <div class="baocun">
      <router-link to="Gexi" ><span @click="getuser">保存</span></router-link>
    </div>
  </div>
  <div class="baocun-content">
      <div class="baocun-yi">
        <div class="baocun-left">头像</div>
        <label id="btn-wrap">
          <input type="file" name="file" accept="image/jpeg,image/png"@change="up" id="file-input">
          <img  :src="item.img" v-if="item.img">
        </label>
      </div>
      <div class="baocun-yi">
        <div class="baocun-left" >姓名</div>
          <input type="text" value="test" class="right" v-model="item.name">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">身份证</div>
        <div class="right-1">{{item.idNum}}</div>
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">家庭住址</div>
        <input type="text" value="test" class="right" v-model="item.address">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">工作住址</div>
        <input type="text" value="test" class="right" v-model="item.workAddress">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">民族</div>
        <input type="text" value="test" class="right" v-model="item.nation">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">微信号</div>
        <input type="text" value="test" class="right" v-model="item.VX">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">qq号</div>
          <input type="text" value="test" class="right" v-model="item.QQ">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">性别</div>
        <div class="right-1">
          <input name="sex"  type="radio" class="n1" :value="1" v-model="item.sex">男
          <input name="sex" type="radio" class="n2" :value="2" v-model="item.sex">女
        </div>
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">最高学历</div>
        <input type="text" value="test" class="right" v-model="item.edu">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">职称</div>
        <input type="text" value="test" class="right"  v-model="item.workTitle">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">薪资水平</div>
        <input type="text" value="test" class="right"  v-model="item.salary">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">入党时间</div>
        <input type="date" class="shijian" v-model="item.partyTime">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">党费最后缴纳时间</div>
       <input type="date" class="shijian" v-model="item.timeSalary">
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">当前身份</div>
        <div class="right">
          <p>
            <select name="" id="" v-model="item.status">
              <option :value="1">党员</option>
              <option :value="2">预备党员</option>
              <option :value="3">积极分子</option>
        </select>
          </p>
        </div>
      </div>
      <div class="baocun-yi">
        <div class="baocun-left">党支部</div>
        <input type="text" value="test" class="right"  v-model="item.area">
      </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        token:'',
        item:{
            status:"",
            idNum:"",
            area:"",
            img:"",
            name:"",
            address:"",
            workAddress:"",
            nation:"",
            vx:"",
            QQ:"",
            sex:"",
            edu:"",
            workTitle:"",
            partyTime:"",
            timeSalary:"",
            salary:"",
        },

      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
        up($event){
          console.log($event)
          var file = $event.target.files[0];
          var form =new FormData();
          form.append("file",file);
          form.append("token",this.token)
          axios.post("http://upload-z1.qiniup.com",form,{headers:{"Content-Type":"multipart/form-data"}}).then(res=>{
            console.log(res)
            this.item.img=res.data.url;
            console.log(this.item.img)
          })
        },
        getToken(){
          axios.get("http://up.yaojunrong.com/getToken").then(res=>{
            this.token=res.data.data;
          })
        },
        getuser(){
           this.$axios.post("updata",this.item).then(res => {
            console.log(this.item.img)
             console.log(res);
             this.item = res[0]
           })
        },
      getquanuser(){
        this.$axios.get("getQian",).then(res => {
          this.item = res[0];
        })
      },
    },
    created(){
      this.getToken();
      this.getquanuser();
    },
  }
</script>

<style scoped>
  .bianji-baocun{
    width: 100%;
    margin-top: 50px;
  }
  .baocun-header{
    position: fixed;
    left: 0;top: 0;
    z-index: 1000;
    background:#c7000a;
    width:100%;
    height: 44px;
    font-size: 18px;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  .baocun span, .iconfont,.zhongjian{
    font-size: 18px;
    color: #fff;
    padding-right: 10px;
    padding-left: 10px;
    padding-right:10px;
  }
  .baocun-one select{
    border: none;
  }
  .baocun-yi{
    padding:10px 15px;
    height: 30px;
    border-bottom: 1px solid #aaa;
  }
  .baocun-left{
    float: left;
    line-height: 30px;
  }
  .right img{
    width: 28px;
    height: 48px;
  }
  .right,.shijian{
    float: right;
    right: 20px;
    height: 30px;
    border: 0;
    text-align: right;
    font-size: 16px;
    outline: none;
    line-height: 30px;
  }
  #file-input{
    display: none;
  }

  .right-1{
    right: 20px;
    font-size: 16px;
    float: right;
    line-height: 30px;
  }
  #btn-wrap{
    position:absolute;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    top: 50px;
    right: 10px;
  }
  #btn-wrap img{
    float: right;
    width: 40px;
    height: 40px;
    margin: 4px 10px;
  }

</style>
