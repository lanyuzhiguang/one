<template>
  <div>
    <mt-header fixed  :title="title">
      <mt-button icon="back" @click="$router.back()" slot="left"  v-if="back"></mt-button>
    </mt-header>
  </div>
</template>

<script>
    export default {
      props:{
        back:true,
      },
computed:{
  title(){
    return this.$route.meta.title;
  },

}
    }
</script>

<style scoped>
.mint-header{
  background:#c7000a;
  font-size: 18px;
  height: 43px;
  margin:0;}
</style>
