<template>
<div class="huifu">
  <GongHeader :back="true"></GongHeader>
  <div class=" huihu-content">
 <div class="content-one" >
   <div class="yun-one" >
     <div class="yun-one-header">
         <div class="yun-left-tu">
           <img :src="item.userAvatar" alt="">
         </div>
         <div class="yun-left-zi">
           <span class="yun-leftti">{{item.userName}}</span>
           <div class="shijian">
             <i class="iconfont icon-shijian"></i>
             <span>{{item.updatedAt|time}}</span>
           </div>
         </div>
     </div>
     <div class="yun-one-content">
       {{item.contentText}}
     </div>
   </div>
   <div class="yuifu" v-for="zaq in ghping">
     <div class="yun-one" >
       <div class="yun-one-header">
         <div class="yun-left-tu">
           <img :src="zaq.userAvatar">
         </div>
         <div class="yun-left-zi">
           <span class="yun-leftti">{{zaq.userName}}</span>
           <div class="shijian">
             <i class="iconfont icon-shijian"></i>
             <span>{{zaq.updatedAt|time}}</span>
           </div>
         </div>
       </div>
       <div class="yun-one-content">
         {{zaq.contentText}}
       </div>

     </div>
   </div>
 </div>
    <div class="yun-footer">没有数据了</div>
    <div class="pinglun">
      <p><input type="text" class="neirong" placeholder="评论内容" v-model="hping.contentText">
        <input type="submit" value="评论" class="ping" @click="huifuping">
      </p>
    </div>
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
      return {
        item: {},
        hping:{
          contentText:"",
          parentId:"",
          toUserId:""
        },
        ghping:[],
      }
    },
    methods:{
      reply(){
        this.$axios.get('getCloudlist',{id: this.$route.query.id}).then(res=>{

          this.hping.toUserId=res.data.userId
          this.hping.parentId=res.data._id
          this.item = res.data;
        })
      },
      huifuping(){
        this.$axios.post('addReply',this.hping).then(res=>{
          // console.log(res)
          // console.log(this.hping);
          this.hping = res;
          this.$router.go(0)
        })
      },
      getfuping(){
        this.$axios.get('getReply',{parentId:this.$route.query.id}).then(res=>{
          // console.log(res.data)
          this.ghping = res.data;
        })
      },
    },
    mounted(){
      this.reply();
      this. getfuping()
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
  .huifu{
    background-color: #efeff4;
    padding-top: 60px;
    padding-bottom: 95%;
  }
  .yun-one{
    background: #fff;
    margin: 0px 5px;
    border: 1px solid #aaaa;
    width: 95%;
    padding-bottom: 15px;
    margin-bottom: 10px;


  }
  .yun-left-tu img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .yun-one-header{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-right: 10px;
    margin-top: 10px;
  }
  .yun-left-zi{
    padding: 10px;
  }
  .yun-leftti{
    font-size: 24px;
    color: #000;
  }
  .shijian{
    font-size: 10px;
    color:  #757575;
  }
  .yun-one-content{
    padding:10px 10px;
    font-size: 20px;
    color:#757575 ;
    /*width: 100%;*/
    word-wrap: break-word;
  }
  .yun-footer{
    text-align: center;
    color: #aaa;
    padding: 10px;

  }

  .pinglun{
    position: fixed;
    bottom: 0px;
    padding:5px ;
    width: 100%;
    border: 1px solid #aaa;
    background-color: #fff;
  }

  .neirong{
    border: 1px solid red;
    border-radius: 6px;
    width: 294px;
    height: 29px;
    word-wrap: break-word;
    padding-left: 10px;
    padding-right: 10px;

  }
  .ping{
    border: none;
    background: red;
    width: 40px;
    height: 40px;
    margin: 5px;
    color: #fff;
    border-radius: 8px;
  }

</style>
