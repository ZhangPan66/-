<template>
  <div class="buy-safe">
    <div class="buy-safe-step">
      <el-steps :active="active" finish-status="success" :align-center="true">
        <el-step title="填写信息"></el-step>
        <el-step title="确认信息"></el-step>
        <el-step title="确认提交"></el-step>
      </el-steps>
      <div class="buy-safe-container">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
          v-if="active === 0"
        >
          <el-form-item label="无人机注册号/生产序列号" prop="number">
            <el-input v-model="ruleForm.number"></el-input>
          </el-form-item>
        </el-form>
        <el-table border :data="tableData" style="width: 100%" v-if="active === 1">
          <el-table-column prop="name" label="品牌"> </el-table-column>
          <el-table-column prop="xinghao" label="型号"> </el-table-column>
          <el-table-column prop="buyDate" label="购买日期"></el-table-column>
          <el-table-column prop="username" label="所有者"></el-table-column>
          <el-table-column prop="number" label="证件号码"></el-table-column>
          <el-table-column prop="callP" label="联系人"></el-table-column>
          <el-table-column prop="userPhone" label="联系电话"></el-table-column>
        </el-table>
        <p v-if="active===2">申请已提交，请耐心等待！</p>
      </div>
      <el-button style="margin-top: 12px;" @click="next">{{btnText}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 记录当前活动页面下标
      active: 0,
      // 要展示页面的数组
      activeTabs: ["first", "scend"],
      // 按钮文字
      btnText:"下一步",
      ruleForm: {
        number: ""
      },
      rules: {
        number: [
          { required: true, message: "请输入无人机序号", trigger: "blur" },
        ]
      },
      tableData: [
        {
          name: "ewe",
          xinghao: "12345aaa",
          buyDate: "2016-09-21",
          username: "xxx",
          number: "5132484687946497",
          callP: "xxx",
          userPhone: "131231464"
        }
      ]
    };
  },
  methods: {
    next() {
      this.active++
      if(this.active > 2){
        this.active = 0
      }
      if(this.active === 2){
        this.btnText = "确认"
      }
    },
  },
  computed: {
    activeTab() {
      return this.activeTabs[this.active];
    }
  },
  created(){

  }
};
</script>

<style lang="scss" scoped>
.buy-safe {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  &-step {
    width: 100%;
    height: 100%;
    display: flex;   
    flex-direction: column;
    align-items: center; 
    .el-steps{
        width: 385px;
        .el-step{
            margin-top: 180px;
            /deep/.el-step__icon{
                .el-step__icon-inner{
                    font-weight: normal;
                    font-size: 12px;
                }
            }
            /deep/.is-process{
                .el-step__icon{
                    background: #5584FF;
                    color: #fff;
                    border: none;
                }
            }
        }
    }
  }
  .buy-safe-container{
      height: 100%;
      width: 90%;
      padding: 0 20px;
      display: flex;
      justify-content: center;
      .el-form{
          width: 385px;
          /deep/.el-form-item__label{
              height: 30px;
              margin: 20px 0;
          }
          /deep/.el-form-item__content{
              .el-input{
                  height: 30px;
                  input{
                      height: 30px;
                      line-height: 30px;
                      
                  }
              }
          }
      }
      /deep/.el-table{
          width: 100%;
          margin:50px 0 120px 0;
          .el-table__header-wrapper{
              .el-table__header{
                  thead{
                      tr{
                          th{
                              color: #333333;
                              font-size: 14px;
                              background: #CCCCCC;
                              text-align: center;
                              padding: 0;
                              height: 45px;
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
                          }
                      }
                  }
              }
          }
      }
      p{
          margin-top: 50px;
      }
  }
  .el-button{
      margin: 100px 0 20px 0;
      height: 30px;
      line-height: 30px;
      padding: 0;
      width: 200px;
      border-radius: 27px;
      background: #06218A;
      color: #fff;
  }
}
</style>
