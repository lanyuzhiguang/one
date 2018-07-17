<template>
<div>
  <GongHeader :back="true"></GongHeader>
  <div class="content">
    <p class="biaoti">{{tiao.title}}</p>

    <div class="tiaoli" v-html="tiao.content">
    </div>
    <div class="anniu">
      <select name="" id="select" v-model="area" class="xuanze">
        <option value="" >请选择</option>
        <option value="信息工程学院教工第一党支部" >信息工程学院教工第一党支部</option>
        <option value="信息工程学院教工第二党支部">信息工程学院教工第二党支部</option>
        <option value="信息工程学院教工学生党支部">信息工程学院教工学生党支部</option>
        <option value="信息工程学院学生流动党支部（北京）">信息工程学院学生流动党支部（北京）</option>
      </select>
      <span class="nexbtn">
       <button @click="next">下一步</button>
      </span>
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
        tiao:{},
        area:''
      }
    },
    methods:{
      getcan(){
        this.$axios.get('getDiscuss').then(res=>{
          // console.log(res);
          this.tiao = res.data;

        })
      },
      next(){

        this.$router.push({path:'/Minpinglast',query:{area:this.area,reviewsId:this.$route.query.reviewsId}})
      },
    },
    created() {
      this.getcan()
    }
  }
</script>

<style scoped>
  .content{margin-top: 60px}
  .biaoti{
    font-size: 16px;
    padding: 10px 20px;
    text-align: center;
    color: #000;
  }
  .yi{
     font-size: 100%;
    padding: 10px;
    color: #666;
  }
  .tiaoli{

   margin: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .anniu{
    position: fixed;
    left: 25px;
    bottom: 50px;
  }
  .xuanze{
    background:#c50206;
    width: 188px;
    height: 42px;
    padding-left: 20px;
    font-size:100%;
    border-radius: 5px;
    color: #fff;
  }
  .xuanze option{
    background: #fff;
    border: 1px solid #c7a054;
    font-size: 18px;
    padding: 10px;
    color: #000;
  }
  .nexbtn{
    margin-left: 10px;
  }
  .nexbtn button{
    background:#c50206;
    width: 94px;
    height: 42px;
    font-size:100%;
    border-radius: 5px;
    color: #fff;
  }


</style>
