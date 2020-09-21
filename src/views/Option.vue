<template>
  <div class="option">
    <header>头部</header>
    <main>
      <el-row class="tac">
        <el-col :span="6">
            <Nav></Nav>
        </el-col>
        <el-col :span="18" class="option-menu-container">
            <router-view></router-view>
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/option/Nav.vue"
export default {
    components:{
        Nav
    }
};
</script>

<style lang="scss" scoped>
.option {
  height: 100%;
  width: 100%;
  background: #051628;
  header {
    height: 10%;
    width: 100%;
  }
  main {
    height: 90%;
    width: 100%;
    .tac{
        width: 100%;
        height: 100%;
        padding-bottom: 30px;
        .option-menu-container{
            width: 73%;
            height: 100%;
            background: #fff;
            border-radius: 5px;
    }
    }
  }
}
</style>
