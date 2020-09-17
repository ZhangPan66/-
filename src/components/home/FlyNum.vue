<template>
  <div class="flyNum-wrap">
    <p class="flyNum-title">无人机飞行架数曲线图</p>
    <div class="aplyNum">
      <p class="title">2222</p>
      <p>今日无人机登录申请数量</p>
    </div>
    <div class="flyNum">
      <p class="title">123456</p>
      <p>今日无人机申请飞行数量</p>
    </div>
    <div id="flyNum">
    </div>
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
  data() {
    return {
      b: [80, 250, 40, 100, 80, 90]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let flyNum = echarts.init(document.getElementById("flyNum"));
      // 绘制图表
      flyNum.setOption({
          grid:{
                    x:40,
                    y:30,
                    // x2:5,
                    // y2:20,
                    // borderWidth:1
                },
        tooltip: {},
        xAxis: {
          splitLine: {
            // show: false
          },
          axisLabel: {
            textStyle: {
              color: "white"
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
            name: "飞行架数",
            type: "line",
            smooth: true,
            symbol: "circle", //折线点设置为实心点
            symbolSize: 12, //折线点的大小
            itemStyle: {
              normal: {
                /*设置折线原点*/
                color: "white",
                lineStyle: {
                  /*设置折线颜色*/
                  borderType: "solid",
                  borderColor: "#00D3FF",
                  borderWidth: 12,
                  color: "#00D3FF",
                }
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
.flyNum-wrap{
  width: 100%;
  height: 100%;
  color: #01B4FF;
  position: relative;
  .flyNum-title{
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
  .aplyNum{
    position: absolute;
    top:-20px;
    width: 180px;
    right: 280px;
    font-size:14px;
    background: #054072;
    padding: 5px 0;
    p{
      text-align: center;
    }
    .title{
      font-size: 30px;
    }
  }
  .flyNum{
    position: absolute;
    top: -20px;
    width: 180px;
    right: 30px;
    font-size:14px;
    background: #054072;
    padding: 5px 0;
    p{
      text-align: center;
    }
    .title{
      text-align: center;
      font-size: 30px
    }
  }
  #flyNum {
    width: 100%;
    height: 90%;
}
}
</style>
 