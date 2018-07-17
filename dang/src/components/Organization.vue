<template>
  <div class="org" >
    <GongHeader :back="true"></GongHeader>
    <div class="orgtu">
      <img src="../image/timg.jpg" alt="">
    </div>
    <div class="orgwu">
       <div class="orgrow"><router-link to="Zhengstudy" class="orgrow">
         <div class="orgtu-wu">
           <img src="../image/icon1.png" alt="">
         </div>
         <div class="orgzi">政治学习</div>
       </router-link></div>
      <div class="orgrow"  @click="isaLogin"><router-link to="Sixiang" class="orgrow" >
          <div class="orgtu-wu" >
            <img src="../image/icon2.png" alt="">
          </div>
          <div class="orgzi">思想汇报</div>
        </router-link>
      </div>
      <div class="orgrow" @click="isbLogin"><router-link to="Xinde" class="orgrow">
          <div class="orgtu-wu">
            <img src="../image/icon3.png" alt="">
          </div>
          <div class="orgzi" @click="isbLogin" >心得总结</div>
        </router-link></div>
      <div class="orgrow" @click="iscLogin"><router-link to="Minzhu" class="orgrow">
          <div class="orgtu-wu">
            <img src="../image/icon4.png" alt="">
          </div>
          <div class="orgzi" @click="iscLogin" >民主评议</div>
        </router-link></div>
      <div class="orgrow"><router-link to="Zhaozuzhi"  class="orgrow" >
          <div class="orgtu-wu">
            <img src="../image/icon5.png" alt="">
          </div>
          <div class="orgzi">流动党员找组织</div>
        </router-link></div>
      </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="popup">
      <div >当前没有开启民主评议</div>
    </mt-popup>
  </div>
</template>

<script>
  import GongHeader from "../base/GongHeader.vue"
    export default {
      components:{

        GongHeader
      },
      data(){
        return{
          popupVisible:false
        }
      },
      watch: {
        popupVisible(val) {
          console.log(val);
          if (val) {
            setTimeout(() => {
              this.popupVisible = false;
            }, 3000);
          }
        }
      },
      methods: {

        isaLogin() {
          console.log(67777)
          this.$axios.get("isLogin").then(res => {
            if (!res.ret) {
              this.$router.push('/Login')
            } else {
              this.$router.push('/Sixiang')

            }
          })
        },

        isbLogin() {
          console.log(67777)
          this.$axios.get("isLogin").then(res => {
            if (!res.ret) {
              this.$router.push('/Login')
            } else {
              this.$router.push('/Xinde')

            }
          })
        },

        iscLogin() {
          this.$axios.get('isLogin').then(res => {
            if (res.data=='未登录'){
              this.$router.push({path:'/Login',query:{mark:"Minzhu"}});
            }else {
              this.getDis()
            }
          })
        },
        getDis(){
          this.$axios.get('getDiscuss').then(res=>{
            console.log(res);
            if(res.msg=='success'){
              this.$router.push({path:'/Minzhu',query:{reviewsId:res.data._id}});
            }else{
              this.popupVisible=true
            }
          })
        },
      }
    }
</script>

<style scoped>
  .org{width: 100%;
  }
  .orgtu img{
    display: block;
    margin-top: 43px;
    height: 206px;
    width: 100%;
  }

  .orgwu{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    text-align: center;
    margin-top: 20px;
    }
  .orgrow{
    width: 30%;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 14px;
    color: #aaaaaa;
  }

  .orgtu-wu img{
    height:98px;
   }


</style>
