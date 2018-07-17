<template>
    <div class="mingxi">
      <GongHeader :back="true"></GongHeader>
      <div class="mingxi-content" v-for="item in scores" :key="item.id">
        <div class="ming-one" >
          <div class="ming-header">
            <div class="left" >{{item.scoreName}}</div>
            <div class="right">+{{item.score}}</div>
          </div>
          <div>{{item.updataTime |  time }}</div>
          <!--<p>{{item.updataTime |  time }}</p>-->
        </div>

      </div>
    </div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
    export default {
      data(){
        return {
          scores:[]
        }
      },
      components:{

        GongHeader
      },
      methods:{
        getscores(){
          this.$axios.get('getScores').then(res=>{
            console.log(res)
            this.scores = res.data;
          })
        }
      },
      mounted(){
        this.getscores()
      },
      filters: {
        time: function (value) {
          let d = new Date(value)
          return (d.getFullYear()) + '-' + (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + '-' + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate())+"   "+(d.getHours())+':'+( d.getMinutes()+ 1 >9 ? d.getMinutes() + 1 : '0'+d.getMinutes())+':'+( d.getSeconds())
        }
      },
    }
</script>

<style scoped>
.mingxi{
  width: 100%;
  margin-top: 43px;
}
  .ming-one{
    padding:15px 10px;
    border-bottom: 1px solid #aaa;
    height: 39px;
  }
  .ming-header{
    display: flex;
    justify-content: space-between;
  }
.left{
  font-size: 18px;
  color:#333;
  border-bottom: 5px;
  padding-bottom: 5px;
}
.right{
  font-size: 18px;
  color: #ff4a4a;
}
  .ming-one p{
    font-size: 14px;
    color:#333;
  }

</style>
