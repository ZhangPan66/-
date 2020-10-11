<template>
  <div class="lookUav">
    <div class="input-box">
      <span>无人机注册号/生产序列号</span>
      <el-input suffix-icon="el-icon-search"></el-input>
      <el-button>查询</el-button>
    </div>
    <div class="fromdata-box">
      <template>
        <el-table :data="uavsData" border style="width: 100%">
          <el-table-column prop="uno" label="序号">
          </el-table-column>
          <el-table-column prop="brand" label="品牌">
          </el-table-column>
          <el-table-column prop="model" label="型号"></el-table-column>
          <el-table-column prop="serial_no" label="无人机注册号/生产序列号" width="265"></el-table-column>
          <el-table-column prop="buy_date" label="购买日期"></el-table-column>
          <el-table-column prop="user" label="是否实名登记"> </el-table-column>
          <el-table-column prop="is_insurance" label="是否购买保险"></el-table-column>
        </el-table>
      </template>
    </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total=total
          :page-size=5

          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 从服务器获取到的源数据
      originUavsData: [
      ],
      // 无人机的总数
      total:0,
      // 当前显示的页数
      nowPage:1,
      // 每页显示的个数
      pageNum:5
    };
  },
  methods:{
    // 获取当前用户说有无人机信息
    getUserNAVData(){
      this.$axios.get('api/uav_all/').then(resp=>{
        var data = resp.data
        this.total = data.uavs.length
        this.originUavsData = data.uavs || []
      })
    },
    handleCurrentChange(val){
      this.nowPage = val
    }
  },
  created(){
    this.getUserNAVData()
  },
  computed:{
    uavsData(){
      var uavs = JSON.parse(JSON.stringify(this.originUavsData))
      var showUavsData = []
      if(this.originUavsData.length<=5){
        return this.originUavsData
      }else{
        showUavsData = uavs.splice((this.nowPage-1) * 5 ,this.pageNum)
      }
      return showUavsData
    }
  },
};
</script>

<style lang="scss">
  .lookUav{
    height: 100%;
    position: relative;
    padding: 0 20px;
    .input-box{
      height: 50px;
      display: flex;
      align-items: center;
      span{
        font-size: 12px;
      }
      .el-input{
        width: 200px;
        margin: 0 50px;
        /deep/ .el-input__inner{
          height: 25px;
          padding: 0;
          outline: none;
        }
      }
      .el-button{
        height: 25px;
        width: 50px;
        background: #06218A;
        color: #fff;
        padding: 0;
      }
    }
    .fromdata-box{
      .el-table__header-wrapper{
        .el-table__header{
          thead{
            tr{
              th{
                font-weight: 500;
                font-size: 14px;
                background: #EBECF0;
                border-right:1px solid #ccc;
                padding: 0;
                text-align: center;
              }
            }
          }
        }
      }
      .el-table__body-wrapper{
        .el-table__body{
          tbody{
            tr{
              td{
                padding: 0;
                text-align: center;
                font-size: 12px;
                color: #333333;
                height: 67px;
                line-height: 67px;
              }
            }
          }
        }
      }
    }
    .pagination{
      height: 30px;
      width: 500px;
      // background: #333333;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 15px;
      .el-pagination{
        .el-pager{
          li{
            background: #fff; 
            border: 1px solid #C4C6CF;
            height: 28px;
            width: 28px;
            &:not(.disabled).active{
              background: #06218A;
            }
          }
        }
      }
    }
  }
</style>
