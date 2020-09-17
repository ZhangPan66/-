<template>
  <div class="classLogin">
    <p class="classLogin-title">无人机型号登记表</p>
    <div id="classLogin"></div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "hello",
  data(){
      return {
          b:[80, 250, 40, 100, 80, 90]
      }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let classLogin = echarts.init(document.getElementById("classLogin"));
      // 绘制图表
      classLogin.setOption({
        tooltip: {},
        xAxis: {
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#276CB4"
            }
          },
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {
         splitLine: {
            color: "red",
            // show: false
            lineStyle: {
              color: ['#054072'],
              width: 1,
              type: "solid",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#06C5F5"
                  },
                  {
                    offset: 1,
                    color: "#7C04ED"
                  }
                ])
              }
            },
            barWidth : 30,//柱图宽度
            barCategoryGap:'15',/*多个并排柱子设置柱子之间的间距*/
            data: this.b,
          },
          {
            name: "型号",
            type: "line",
            symbol: "circle", //折线点设置为实心点
            symbolSize: 12, //折线点的大小
            itemStyle: {
              //设置折线原点颜色
              color: "#FAEE04",
              /*设置折线颜色*/
              normal: {
                color: "#FAEE04"
              }
            },
            data: [80, 250, 40, 100, 80, 90]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.classLogin{
  width: 30%;
  height: 100%;
  .classLogin-title{
    box-sizing: border-box;
    padding-left: 15px;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    width: 400px;
    font-size: 22px;
    color: #2AAEF2;
    background: linear-gradient(92deg, #0825B7, #01B4FF,#051628);
  }
  #classLogin {
  background: #051628;
  height: 90%;
  width: 100%;
}
}

</style>
 