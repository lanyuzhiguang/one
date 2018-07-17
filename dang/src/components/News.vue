<template>
  <div class="news">
    <GongHeader :back="true"></GongHeader>
    <div class="newscontent" v-for="item in news" :key="item.id">
      <div class="news-one">
        <router-link :to="'/Newslast?id='+item._id" >
          <div class="newstu">
            <img :src="item.img" alt="">
          </div>
          <div class="newszi">
            <div class="news-biaoti" v-text="item.title"> </div>
            <div class="news-riyan">
              <span class="ri">{{item.updataTime |  time}}</span>
              <span class="kantu">
              <i class="iconfont icon-yanjing" ></i>
              <i class="kan" v-text="item.yan"></i>
                </span>
            </div>
          </div>
        </router-link>
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
        news:[]
      }
    },
    methods:{
      getNews(){
        this.$axios.get('getNews',{category: "信工新闻眼"}).then(res=>{
          // console.log(res)
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
    color: #aaaaaa;
  }

  .kantu{
    float: right;
    font-size:8px;
    color: #aaaaaa;
    margin-top: 5px;
  }
</style>
