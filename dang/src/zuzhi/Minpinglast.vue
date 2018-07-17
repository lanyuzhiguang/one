<template>
<div>
  <GongHeader :back="true"></GongHeader>
  <div class="content">
    <div class="content-one" v-for="item in lists" :key="item.id">
      <div  @click="select(item.idNum)" class="one">
        <span class="tu"><img :src="item.img"></span>
        <span class="title">{{item.name}}</span>
        <span class="dangzhi">{{item.area}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
  import { Toast } from 'mint-ui';
  export default {
    components: {

      GongHeader
    },
    data() {
      return {
        lists: [],
      }
    },
    methods: {
      getdang() {
        this.$axios.get('getQian',{area:this.$route.query.area}).then(res=>{
          // console.log(res);
          this.lists = res;
        })
      },
      select(otherUserId){
        // console.log(this.$route.query.reviewsId);
        this.$axios.get('getOtherReviews',{otherUserId,reviewsId:this.$route.query.reviewsId}).then(res=>{
          console.log(res);
          if (res.msg=='success'){
            this.$router.push({path:'/Pinglast',query:{otherUserId,reviewsId:this.$route.query.reviewsId}})
          }else{
            Toast({
              message: '该党员尚未完善个人总结',
              duration: 1000
            });
          }
        })

      }
      },
      created() {
        this.getdang();
      }
  }
</script>

<style scoped>
  .content{
    margin-top: 50px;
  }
  .one{
    height: 50px;
    display: flex;
    border-bottom: 1px solid#aaa;
    justify-content: space-around;
    align-items: center;

  }
  .one img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .dangzhi{
    font-size: 14px;
  }

</style>
