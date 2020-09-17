<template>
  <div class="plan-fly">
      <p class="plan-fly-title">无人机计划飞行表</p>
      <div class="plan-box">
          <div class="plan-area">
              <p class="plan-area-title">
                  今日总量:<span class="plan-area-title-num"> 593 </span>架
              </p>
              <div class="plan-area-condition">
                  <p class="plan-area-condition-title">地区分布情况</p>
                  <ul>
                      <li>
                          <span class="symbol"></span>
                          <span class="area">永嘉县</span>
                          <span class="num">70</span>
                      </li>
                  </ul>
              </div>
          </div>
          <div id="plan"></div>
      </div>
  </div>
</template>

<script>
import option from '@/assets/js/echarts/planOption.js'
export default {
    methods:{
        drawPlan(){
            let myPlan = this.$echarts.init(document.getElementById('plan'))
            myPlan.setOption(option)
        }
    },
    mounted(){
        this.drawPlan()
    }
}
</script>

<style lang="scss" scoped>
    .plan-fly{
        width: 30%;
        height: 100%;
        margin-right: 25px;
        display: flex;
        flex-direction: column;
        &-title{
            box-sizing: border-box;
            width: 100%;
            height: 40px;
            background: linear-gradient(92deg,#0825B7,#01B4FF,#051628);
            font-size: 22px;
            font-weight: 400;
            line-height: 40px;
            color: #2AAEF2;
            // background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
            padding-left: 16px;
        }
        .plan-box{
            width: 100%;
            flex: 1;
            display: flex;
            .plan-area{
                width: 30%;
                height: 100%;
                &-title{
                    color:#2AA7D3;
                    font-size:12px;
                    height: 40px;
                    line-height: 40px;
                    margin-bottom: 50px;
                    &-num{
                        font-size: 20px;
                    }
                }
                &-condition{
                    &-title{
                        color: #2AA7D3;
                        font-size: 18px;
                    }
                    ul{
                        li{
                            display: flex;
                            height: 30px;
                            line-height: 30px;
                            span{
                                font-size: 12px;
                                color: #2AA7D3;
                            }
                            align-items: center;
                            .symbol{
                                width: 10px;
                                height: 10px;
                                background: red;
                            }
                            .area{
                                margin: 0 31px 0 2px;
                            }
                        }
                    }
                }
            }
            #plan{
                width: 70%;
                height: 100%;
            }
        }
    }
</style>