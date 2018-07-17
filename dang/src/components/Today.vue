<template>
  <div class="today">
    <GongHeader :back="true"></GongHeader>
    <div class="todaycontent">
      <div class="biaoti-nochange"></div>
      <div class="today-one">
        <div class="shijian-content" v-html="item"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
    export default {
      components: {
        GongHeader
      },
      data(){
        return {
          item: ''
        }
      },
      methods:{
        getNews(){
          this.$axios.get('getData').then(res=>{
            console.log(res)
            this.item = res.data;
          })
        }
      },
      mounted(){
        this.getNews()
      }
    }
</script>

<style >
.today{
  width: 100%;
  margin-top: 50px;
}
.todaycontent{
  margin-right: 10px;
  margin-left: 10px;
  text-align: left;
  font-size: 12px;
  line-height: 2;
}
.today-one{
  margin-top: 10px;
  margin-bottom: 10px;
}

  .biaoti-nochange{
    font-size: 24px;
    margin-bottom: 10px;
    color: #000;
    font-weight: 500;
    font-family: -apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;
    line-height: 1.2;

  }

  .shijian-content{
    font-size: 100%;
    margin: 0 0 10px 0;
    color: #000;
    vertical-align: baseline;
    font-weight: inherit;
    line-height: 2;
  }
</style>
