<template>
  <div>
    <GongHeader :back="true"></GongHeader>
    <div class="content">
      <div class="content-one">
        <h3 v-text="item.title"></h3>
        <img  :src="item.img" alt="">
        <p v-html="item.content"></p>
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
        item: {}
      }
    },
    methods:{
      getNews(){
        this.$axios.get('getNews',{id: this.$route.query.id}).then(res=>{
          console.log(res.data)
          this.item = res[0];
        })
      }
    },
    mounted(){
      this.getNews()
    }
  }

</script>

<style scoped>
  .content{
    margin-top: 40px;
    padding: 10px;
  }
  .content-one h3{
    font-size: 24px;
    margin-bottom: 10px;
    color: #000;
    font-weight: 500;
    line-height: 1.2;
    font-family: -apple-system,Helvetica Neue,Roboto,Segoe UI,sans-serif;
    padding-left: 10px;
    padding-right: 10px;
    word-wrap: break-word;
  }
  .content-one img{
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }
  .content-one p{
    font-size: 16px;
    line-height: 2;
    margin-bottom: 20px;
  }
</style>
