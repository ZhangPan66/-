<template>
  <div class="lookUav">
    <div class="input-box">
      <span>无人机注册号/生产序列号</span>
      <el-input suffix-icon="el-icon-search"></el-input>
      <el-button>查询</el-button>
    </div>
    <div class="fromdata-box">
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="cid" label="序号">
          </el-table-column>
          <el-table-column prop="name" label="品牌">
          </el-table-column>
          <el-table-column prop="count" label="型号"></el-table-column>
          <el-table-column prop="xinhao" label="无人机注册号/生产序列号" width="265"></el-table-column>
          <el-table-column prop="buyDate" label="购买日期"></el-table-column>
          <el-table-column prop="isLogin" label="是否实名登记"> </el-table-column>
          <el-table-column prop="isBuySafe" label="是否购买保险"></el-table-column>
        </el-table>
      </template>
    </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          cid: "1",
          name: "王小虎",
          count:'1234567',
          xinhao: "abcdddd1",
          buyDate:"2020-9-20",
          isLogin:'是',
          isBuySafe:'是'
        },
        {
          cid: "2",
          name: "王小虎",
          count:'1234567',
          xinhao: "abcdddd1",
          buyDate:"2020-9-20",
          isLogin:'是',
          isBuySafe:'是'
        },
        {
          cid: "3",
          name: "王小虎",
          count:'1234567',
          xinhao: "abcdddd1",
          buyDate:"2020-9-20",
          isLogin:'是',
          isBuySafe:'是'
        },
         {
          cid: "4",
          name: "王小虎",
          count:'1234567',
          xinhao: "abcdddd1",
          buyDate:"2020-9-20",
          isLogin:'是',
          isBuySafe:'是'
        },
      ],
    };
  }
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
