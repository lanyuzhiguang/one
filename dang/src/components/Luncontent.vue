<template>
  <div>
    <div class="header">
      <span class="iconfont icon-fanhui1" @click="$router.push('/Home')"></span>
      <span class="biaoti">{{sliders.category}}</span>
    </div>
    <!--<GongHeader :back="true">{{sliders.category}}</GongHeader>-->
    <div class="content">
      <h3>{{sliders.title}}</h3>
      <div class="news" v-html="sliders.content"></div>
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        sliders:{}
      }
    },
    methods: {
      getSwipe(){
        let id =this.$route.query.id;
        // console.log(id)
        this.$axios.get('getQianLunBoTus',{id}).then(res=>{
          this.sliders =res[0];
          console.log(res[0]);
        })
      }
    },
    created() {
      this.getSwipe();
    },

  }
</script>

<style scoped >
  .content{
    margin-top: 44px;
    padding: 10px;
    background-color: #fff;}
  .header{
    position: fixed;
    left: 0;top: 0;
    background:#c7000a;
    width:100%;
    height: 44px;
    font-size: 18px;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .header .iconfont{
    float: left;
    font-size: 24px;
    color: #fff;
    padding-left: 10px;
  }
  .biaoti{
    font-size: 20px;
    margin-left:105px;
  }
 .content h3{
    font-size:24px;
    font-weight: 500;
    color: #000;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  .news {
    line-height: 2;
  }
</style>

