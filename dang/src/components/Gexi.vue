<template >
  <div class="gemi">
  <div class="gemi-header">
      <div class="iconfont icon-fanhui1" @click="$router.push('/My')"></div>
    <div class="zhongjian">个人信息</div>
      <div class="bian">
      <router-link to="Bianji" ><span>编辑</span></router-link>
    </div>
  </div>
    <div class="gemi-content">
      <div class="gemi-yi">
      <div class="demi-left">头像</div>
      <div class="right"><img :src="item.img"></div>
    </div>
      <div class="gemi-yi">
        <div class="demi-left">姓名</div>
        <div class="right">{{item.name}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">身份证</div>
        <div class="right">{{item.idNum}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">家庭住址</div>
        <div class="right">{{item.address}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">工作住址</div>
        <div class="right">{{item.workAddress}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">民族</div>
        <div class="right">{{item.nation}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">微信号</div>
        <div class="right">{{item.VX}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">qq号</div>
        <div class="right">{{item.QQ}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">性别</div>
        <div class="right">{{item.sex}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">最高学历</div>
        <div class="right">{{item.edu}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">职称</div>
        <div class="right">{{item.workTitle}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">薪资水平</div>
        <div class="right">{{item.salary}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">入党时间</div>
        <div class="right">{{item.partyTime}}</div>
      </div>
      <div class="gemi-yi">
        <div class="demi-left">党费最后缴纳时间</div>
        <div class="right">{{item.timeSalary}}</div>
      </div>
      <div class="gemi-yi">
          <div class="demi-left">当前身份</div>
          <div class="right">{{item.status}}</div>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        item:{}
      }
    },
    methods:{
     goback(){
       this.$router.go(-1);
     },
      getuser(){
        this.$axios.get("getQian").then(res => {

          console.log(res[0])
          this.item = res[0];
          if(this.item.sex==1){
            this.item.sex="男"
          }
          else{
            this.item.sex="女"
          };
          if(this.item.status==1){
            this.item.status="党员"
          }
          else {
            if (this.item.status == 2) {
              this.item.status = "预备党员"
            }
            else {
              this.item.status = "积极分子"
            }
          }
        })
      },
    },
    mounted(){
      this.getuser();
    },

  }
</script>

<style scoped>
  .gemi{
    width: 100%;
    margin-top: 50px;
  }
  .gemi-header{
    position: fixed;
    left: 0;top: 0;
    z-index: 1000;
    background:#c7000a;
    width:100%;
    height: 44px;
    font-size: 18px;
    display: flex;
    justify-content:space-between;
    align-items: center;

  }

  .bian span, .iconfont,.zhongjian{
    font-size: 18px;
    color: #fff;
    padding-right: 10px;
    padding-left: 10px;
    padding-right:10px;}
  .gemi-yi{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    height: 50px;
    border-bottom: 1px solid #aaa;

  }
  .right img{
    width: 28px;
    height: 48px;
  }

</style>
