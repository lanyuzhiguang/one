<template>
  <div class="yun">
    <GongHeader :back="true"></GongHeader>
    <div class="yun-content" v-for="item in yun" :key="item._id">
      <div class="yun-one">
        <div class="yun-one-header">
           <div class="yun-left">
             <div class="yun-left-tu">
               <img :src="item.userAvatar" alt="">
             </div>
               <div class="yun-left-zi">
                 <span class="yun-leftti">{{item.userName}}</span>
                 <div class="shijian">
                 <i class="iconfont icon-shijian"></i>
                 <span>{{item.updatedAt|time}}</span>
                 <i class="iconfont icon-laba"></i>
                 <span>公开</span>
                   </div>
             </div>
         </div>
        <div class="yun-right">党员互动</div>
      </div>
        <div class="yun-one-content">
          {{item.contentText}}
         </div>
        <div class="yun-one-footer" @click="goReply(item._id,item.userId)">
          <i class="iconfont icon-huifu">&nbsp;&nbsp;回复</i>
      </div>
      </div>
    </div>
    <div class="hongjia">
    <div class="mint-button" @click="ddd" >
      <mt-palette-button content="+" mainButtonStyle="background-color: red;color:#fff;">
        <div class="my-icon-button"></div>
      </mt-palette-button>
    </div>
    <mt-popup v-model="abc" modal=false position="bottom" class="fugai">
      <div class="zhifu">
          <textarea name="a" style="width:95%;height: 100px;border: none;border-radius: 2px;margin: 10px;" v-model="ping.contentText"></textarea>
          <div class="faqu">
            <button class="fa" @click="jia">发布</button>
            <button class="qu">取消</button>
          </div>
      </div>
    </mt-popup>
    </div>
    <div class="yun-footer">没有数据了</div>
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
          abc:false,
          yun:[],
          ping:{
            contentText:""
          },
      }
      },
      methods:{
        ddd() {
          this.abc = true
        },
        isLogin(){
          this.$axios.get("isLogin").then(res => {
            console.log(res)
            if(!res.ret){
              this.$router.push('/Login')
            } else {
            this.$router.push('/Yun')
            }
          })
        },
        getyun(){
          this.$axios.get('getCloudlist').then(res=>{
            console.log(res)
            this.yun = res;
          })
        },
        jia(){
          this.$axios.post('addCloud',this.ping).then(res=>{
            this.$router.go(0)
            console.log(res.data)
          })
        },
        goReply(id,toUserId){
          this.$router.push({path:'/Huifu',query:{id,toUserId}});
        },
      },
      mounted(){
        this.getyun();

      },
      filters: {
        time: function (value) {
          let d = new Date(value)
          return (d.getFullYear()) + '-' + (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + '-' + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate())+"   "+(d.getHours())+':'+( d.getMinutes()+ 1 >9 ? d.getMinutes() + 1 : '0'+d.getMinutes())+':'+( d.getSeconds())
        }
      }
    }
</script>

<style scoped>
  .yun {
    width: 100%;
    margin-top: 40px;
    background-color: #efeff4;
   }
  .yun-one{
    background: #fff;
    margin-top: 10px;
    border-top: 1px solid #aaa;
    border-bottom:1px solid #aaa;
    padding-bottom: 15px;

  }
  .yun-left-tu img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding-left: 10px;
  }
.yun-one-header, .yun-left{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  margin-top: 10px;
}
  .yun-leftti{
   font-size: 18px;
    color: #000;
  }
  .shijian{
    font-size: 10px;
    color:  #757575;
  }
  .yun-right{
    border: 1px solid  #ff4a4a;
    border-radius: 15%/50%;
    width: 100px;
    height: 30px;
    color: #ff4a4a ;
    text-align: center;
    padding-top: 5px;
  }
  .yun-one-content{
    padding:10px 10px;
    font-size: 20px;
    color:#757575 ;
    /*width: 100%;*/
    word-wrap: break-word;
  }

  .yun-one-footer .iconfont {
    padding-left: 280px;
    font-size: 16px;
    color: #757575;
    font-size: 20px;
  }

  .mint-button{
    position:fixed;
    top: 450px;
    left: 240px;
    width: 50%;
    height: 100px;
  }
  .fugai{
    background: #aaa;
    height: 161px;
    width: 100%;
  }
  .faqu{
    margin-left: 10px;
    margin-right: 10px;
  }
  .qu{
    float: left;
    border-radius: 2px;
    border: none;
    background-color: #fff;
    height: 31px;
    font-size: 12px;
    width: 34px;

  }

  .fa {
    float: right;
    border-radius: 2px;
    border: none;
    background-color:#ef473a;
    height: 31px;
    font-size: 12px;
    width: 34px;
    color: #fff;
  }
  .yun-footer{
    font-size: 12px;
    color:#757575 ;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 50px;
  }

</style>
