<template>
  <div class="map">
    <GongHeader :back="true"></GongHeader>
    <div id="bd">
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
      return{
        map:null
      }
    },
    methods:{
      initMap(){
        var mp=new BMap.Map('bd');
        mp.centerAndZoom( new BMap.Point(112.458883,34.640653),15);
        var marker = new BMap.Marker(new BMap.Point(112.458883,34.640653));

        var top_right_navigation = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM,offset:new BMap.Size(20,60)});
        mp.addOverlay(marker);
        var label =new BMap.Label("滴翠湖",{offset:new BMap.Size(20,-10)});
        marker.setLabel(label);
         var geolocationControl = new BMap.GeolocationControl();
        mp.addControl(geolocationControl );
        mp.addControl(top_right_navigation);

      }
    },
    created(){
      this.$nextTick(()=>{
        this.initMap();
      })

    }
  }
</script>

<style scoped>
  .map{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  #bd{

    height: 100%;
    width: 100%;
  }

</style>
