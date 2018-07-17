<template>
  <div class="news">
    <Tab></Tab>
    <GongHeader :back="true"></GongHeader>
    <div class="newscontent" v-for="item in news" :key="item.id">
        <div class="news-one">
          <router-link :to="'/Informlast?id='+item._id" >
        <div class="newstu">
          <img :src="item.img" alt="">
        </div>
        <div class="newszi">
          <div class="news-biaoti" v-text="item.title"> </div>
          <div class="news-riyan">
            <span class="ri">{{item.updataTime |  time}}</span>
          </div>
        </div>
        </router-link>
        </div>

    </div>
  </div>
</template>

<script>
  import Tab from "../base/Tab.vue"
  import GongHeader from "../base/GongHeader.vue"
  export default {
    components:{
      GongHeader,
      Tab
    },
    data(){
      return {
        news:[]
      }
    },
    methods:{
      getNews(){
        this.$axios.get('getNews',{category: "通知早知道"}).then(res=>{
          console.log(res)
          this.news = res;
        })
      }
    },
    mounted(){
      this.getNews()
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
  .news{
    width: 100%;
    margin-top: 44px;
  }
  .news-one{
    padding:10px;
    height: 80px;
    border-bottom: 1px solid #aaaaaa;
  }
  .newstu{
    width: 30%;
    height: 80px;
    float: left;
  }
  .newstu img{
    width: 100%;
    height: 100%;

  }
  .newszi{
    float: right;
    width: 65%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .news-biaoti{
    font-size: 16px;
    color: #000;
  }
  .news-riyan .ri{
    font-size: 10px;
    color: #aaaaaa;
  }
  .news-riyan .iconfont{
    font-size: 8px;
    padding-left: 55px;
    padding-right: 5px;
    color: #aaaaaa;
  }
  .news-riyan .kan{
    font-size: 8px;
    color: #aaaaaa;

  }
</style>

