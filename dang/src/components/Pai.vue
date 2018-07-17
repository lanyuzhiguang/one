<template>
  <div class="pai" >
    <GongHeader  :back="true"></GongHeader>
    <div class="paituzong">
        <div class="paitu" v-for="item in news" :key="item.id" >
          <div class="paitu-1" @click="lastxin(item._id)">
            <!--<router-link   :to="'/Pailast?id='+item._id" >-->
           <div class="paitu-tu">
            <img :src="item.img" alt="">
          </div>
          <p class="paizi" v-text="item.title"></p>
            <!--</router-link>-->
         </div>

      </div>
    </div>
  <div class="shuju">没有数据了</div>
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
        this.$axios.get('getNews',{category: "随时随地拍"}).then(res=>{
          //console.log(res.data)
          this.news = res;
        })
      },
      lastxin(id){
        // this.$router.push("/Pailast")
        this.$router.push({path:'/Pailast',query:{id}})
      },
    },
    mounted(){
      this.getNews()
    },
    // filters: {
    //   time: function (value) {
    //     let d = new Date(value)
    //     return (d.getFullYear()) + '-' + (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + '-' + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate())+"   "+(d.getHours())+':'+( d.getMinutes()+ 1 >9 ? d.getMinutes() + 1 : '0'+d.getMinutes())+':'+( d.getSeconds())
    //   }
    // }

  }
</script>

<style scoped>
  .pai {
    width: 100%;
  }
  .paituzong{
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 15px;
    justify-content:space-between;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
  }
  .paizi{
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #aaaaaa;
  }
  .pai a{
    color: #aaaa;
  }
  .paitu{
    width: 40%;
    padding:20px 15px;

  }
  .paitu-tu img{
    width: 100%;
    height: 120px;
  }
  .shuju{
    height: 55px;
    color:#aaaaaa ;
    font-size: 12px;
    text-align: center;
    padding-top: 15px;
  }

</style>
