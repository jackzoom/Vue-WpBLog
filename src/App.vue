<template>
  <div id="app">

      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="animated-view" ></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" class="animated-view"></router-view>

      <nav-menu v-show="this.$route.meta.navBar"></nav-menu>

  </div>
</template>
<script>
import NavMenu from '@/components/navbar'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  watch: {

  },
  methods: {
  },
  components:{
    'nav-menu':NavMenu
  }
}
</script>

<style>
body,
html {
  background: #fefefe;
  display: flex;
  width: 100%;
  min-height: 100vh;
}
#app{
  flex:1;
  width: 100%;
}
</style>
