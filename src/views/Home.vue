<template>
  <div class="home">
    <header></header>
    <main>
      <ClassLogin></ClassLogin>
      <ZJmap></ZJmap>
      <PlanFly></PlanFly>
    </main>
    <footer>
      <FlyNum></FlyNum>
    </footer>
  </div>
</template>

<script>
import ZJmap from '@/components/home/Map.vue'
import PlanFly from '@/components/home/PlanFly.vue'
import FlyNum from '@/components/home/FlyNum.vue'
import Menu from '@/components/home/Menu.vue'
import ClassLogin from '@/components/home/ClassLogin.vue'
export default {
  name: 'Home',
  components: {
    ZJmap,
    PlanFly,
    FlyNum,
    Menu,
    ClassLogin
  } 
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    background: #051628;
    header{
      height: 10%;
      width: 100%;
    }
    main{
      height: 50%;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    footer{
      height: 37%;
      width: 100%;
    }
  }
</style>