<template>
  <div>
      <GongHeader :back="true">{{sliders.category}}</GongHeader>
      <div class="content">
        <h3>{{sliders.title}}</h3>
        <div class="news" v-html="sliders.content"></div>
      </div>
  </div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
  export default {
    components:{
      GongHeader
    },
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

<style scoped lang="less">
.content{
  margin-top: 44px;
  padding: 10px;
  background-color: #fff;
  h3{
    font-size:24px;
    font-weight: 500;
    color: #000;
    line-height: 1.2;
    margin-bottom: 10px;
  }
}
  .news {
    line-height: 2;
  }
</style>
