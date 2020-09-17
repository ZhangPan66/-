<template>
  <div id="map"></div>
</template>

<script>
import option from '@/assets/js/echarts/mapOption.js'
export default {
    data(){
        return {

        }
    },
    methods:{
        drawMap(){
            let zhejiangMap = this.$echarts.init(document.getElementById('map'))
            zhejiangMap.setOption(option)
        }
    },
    mounted(){
        this.drawMap() 
    }
}
</script>

<style lang="scss" scoped>
    #map{
        width: 38%;
        margin-left: 2%;
        height: 80%;
        opacity: .9;
    }
</style>