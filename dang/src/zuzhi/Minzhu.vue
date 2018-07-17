<template>
  <div>
    <GongHeader :back="true"></GongHeader>
    <div class="content">
      <div class="gezhong" @click="gezhong">
        个人总结
      </div>
      <div class="mingyi" @click="minping">
        民主评议
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
    methods:{
      gezhong(){
        this.$router.push({path:'/Minzong',query:{reviewsId:this.$route.query.reviewsId}})
      },
      minping(){
        this.$router.push({path:'/Minping',query:{reviewsId:this.$route.query.reviewsId}})
        console.log(this.$route.query.reviewsId)
      }
    },
  }
</script>

<style scoped>
  .content{
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .gezhong,.mingyi{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    background: #c7000a;
    font-size: 16px;
    color: #fff;
    margin: 20px 20px 40px 20px;
  }

</style>
