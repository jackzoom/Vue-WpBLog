<template>
<div id="app">

  <!-- 加入渲染缓存 -->

  <transition :name="transitionName" @afterLeave="clearTransition">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="animated-view" />
    </keep-alive>
  </transition>

  <transition :name="transitionName" @afterLeave="clearTransition">
    <router-view v-if="!$route.meta.keepAlive" class="animated-view"></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      history: '/',
      jumpAnime: {},
      historyRoutes: [],
      isAnime: true,
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.noPageAnimation == from.meta.noPageAnimation == true) {
        this.transitionName = '';
        console.log("无动画", to, from);
        return false;
      }
      if (to.name == this.historyRoutes[this.historyRoutes.length - 1]) {
        this.transitionName = 'page-pop';
        this.historyRoutes.pop();
        console.log("退出动画", to, from);
      } else { //默认push
        if (from.name != null) {
          this.transitionName = 'page-push';
          this.historyRoutes.push(from.name);
        }
      }
    }
  },
  methods: {
    clearTransition() {
      return
      this.isAnime = true;
      //  store.commit('transition/setTransition', '');
      this.transitionName = '';
    }
  }
}
</script>

<style>
body,
html {
  background: #f1f1f1;
}



// Page Turn on Transian Effect
.page-push {
  &-enter {
    transform: translate3d(100%, 0, 0);
  }
  &-leave-to {
    transform: translate3d(-20%, 0, 0);
  }
  &-enter-active, &-leave-active  {
    transition: transform .3s ease;
  }
}

// Page Turn Off Transian Effect
.page-pop {
  &-enter {
    transform: translate3d(-20%, 0, 0);
  }
  &-leave-to {
    transform: translate3d(100%, 0, 0);

  }
  &-leave-active {
    z-index: 2;
  }
  &-enter-active, &-leave-active  {
    transition: transform .3s ease;
  }
}

#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

.animated-view {
  position: absolute;
  width: 100%;
  transition: all .2s ease;
  /*定义动画的时间和过渡效果*/
}
</style>
