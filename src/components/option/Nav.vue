<template>
  <div class="option-nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router='true'
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>无人机服务</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/lookuav">查看当前用户所有无人机</el-menu-item>
          <el-menu-item index="/adduav">添加无人机</el-menu-item>
          <el-menu-item index="/buysafe">购买保险申请</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限申请</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">查看当前用户所有无人机</el-menu-item>
          <el-menu-item index="2-2">添加无人机</el-menu-item>
          <el-menu-item index="2-3">购买保险申请</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户设置</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">查看当前用户所有无人机</el-menu-item>
          <el-menu-item index="3-2">添加无人机</el-menu-item>
          <el-menu-item index="3-3">购买保险申请</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
    .option-nav{
    // 最外层样式
        .el-menu-vertical-demo{
            border: none;
        }
         .el-submenu{
        // 单独每一个列表
        background:#051628;
           /deep/ .el-submenu__title{
                padding-left: 75px!important;
                color: #fff;
                i{
                    margin-right: 20px;
                    width: 20px;
                    height: 20px;
                    font-size: 18px;
                    line-height: 20px;
                    color: #fff;
                }
            }
            .el-menu{
                .el-menu-item-group{
                    background:#051628;
                    // min-height: 200px;
                    ul{
                        li{
                            color: #fff;
                            padding: 0;
                            padding-left:125px!important;
                            box-sizing: border-box;
                            font-size: 12px;
                            // text-align: center;
                        }
                    }
                 }
             }
        }
    }

</style>
