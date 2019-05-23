<template>
  <div id="app">

      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="animated-view" ></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" class="animated-view"></router-view>

      <nav-menu></nav-menu>

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
  background: #ffffff;
}
</style>
