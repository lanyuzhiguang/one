<template>
   <div>
     <GongHeader :back="true"></GongHeader>
     <div class="content">
       <p>个人总结</p>
       <div class="tucontent">
       <div class="tu">
         <img :src="Info.pic">
       </div>
       </div>
     </div>
       <div class="footer">
         <span class="you">
         <input type="radio" name="choose" value="0" id="you" v-model="score">
           <label for="you">&nbsp;优</label>
         </span>
         <span class="liang">
           <input type="radio" name="choose" value="1" id="liang" v-model="score">
           <label for="liang">&nbsp;良</label>
         </span>
         <span class="zhong">
         <input type="radio" name="choose" value="2" id="zhong" v-model="score">
           <label for="zhong">&nbsp;中</label>
         </span>
         <span class="cha">
         <input type="radio" name="choose" value="3" id="cha" v-model="score">
           <label for="cha">&nbsp;差</label>
         </span>
         <input type="submit" value="提交" id="tijiao" @click="submit(Info._id)">
       </div>
   </div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
    export default {
       components:{
         GongHeader,
       },
      data() {
        return {
          Info: {},
          score:0
        }
      },
      methods: {
        getRev() {
          this.$axios.get('getOtherReviews', {
            otherUserId: this.$route.query.otherUserId,
            reviewsId: this.$route.query.reviewsId
          }).then(res => {
            // console.log(res);
            this.Info = res.data;
          })
        },
        submit(id) {
          this.$axios.post('addSummary',{id,content:this.score}).then(res=>{
            console.log(res);
            if (res.msg=="评论插入成功"){
              this.$router.go(-1)
            }
          })
        }

      },
      created() {
        this.getRev()
      },
    }
</script>

<style scoped>
  .content{
    margin-top: 43px;

  }
  .content p{
    font-size: 16px;
    text-align: center;
    padding: 20px;
  }
  .tu{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .tu img{
    width:350px;
    height: 487px;
    box-shadow: 0 0 3px 5px #ccc;
  }
  .footer{
    position: fixed;
    bottom: 0;
    background: #eee;
    width: 100%;
    height: 40px;
    padding-left: 20px;
    text-align: left;
    line-height: 40px;
  }
  .footer input[type="radio"]+label::before{
    content: '\a0';
    display:inline-block;
    vertical-align: middle;
    font-size: 16px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    line-height: 1;
  }
  .footer input[type="radio"]:checked+label::before{
    background-clip:content-box;
    background-image:url("../image/checkbox.png") ;
    background-size: 100%;
  }
  .footer input[type="radio"]{
    position: absolute;
    clip:rect(0,0,0,0);
  }

  #tijiao{
    border:1px solid red;
    border-radius: 4px;
    background: #fff;
    width: 50px;
    height: 25px;
    margin-left: 20px;
  }

</style>
