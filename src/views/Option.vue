<template>
  <div class="option">
    <header>
        <Head></Head>
    </header>
    <main>
      <el-row class="tac">
        <el-col :span="5">
            <Nav></Nav>
        </el-col>
        <el-col :span="19" class="option-menu-container">
            <router-view></router-view>
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/option/Nav.vue"
import Head from '@/components/home/Header.vue'
export default {
    components:{
        Nav,
        Head
    }
};
</script>

<style lang="scss" scoped>
.option {
  height: 100%;
  width: 100%;
  background: #051628;
  header {
    height: 15%;
    width: 100%;
  }
  main {
    height: 85%;
    width: 100%;
    .tac{
        width: 100%;
        height: 100%;
        padding-bottom: 30px;
        .option-menu-container{
            width: 75%;
            height: 100%;
            background: #fff;
            border-radius: 5px;
    }
    }
  }
}
</style>
