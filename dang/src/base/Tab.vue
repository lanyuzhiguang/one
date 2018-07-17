<template>
  <div class="footer">
    <router-link to="/Home" >
      <i class="iconfont icon-dangwugongkai"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/Inform">
      <i class="iconfont icon-xiaoxi"></i>
      <span>通知早知道</span>
    </router-link>
    <router-link to="/My">
      <i class="iconfont icon-wo"></i>
      <span>我的党建</span>
    </router-link>
  </div>

</template>

<script>

  export default {
    name: "Tab"
  }
</script>

<style scoped  >
.footer{
  position:fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content:space-around;
  font-size: 14px;
  background: #fff;

}
a{  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaaaaa;
  justify-content: center;
}
a.router-link-active{border-top:1px solid #c7000a;color: #c7000a;}
.iconfont{font-size: 20px;}




</style>
