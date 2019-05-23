<template lang="html">
    <div class="nav-group">
        <router-link class="nav-item" v-for="(item,index) in navList" :key="index" :to="{ name: item.name, params: item.params }" @click.native="changeNav(item.name)">
            <img  class="nav-item-icon" :src="navIndexName==item.name?item.iconActive:item.icon" :alt="item.title">
            <!-- <span :class="['nav-item-title',(navIndexName==item.name?'active':'')]">{{item.title}}</span> -->
        </router-link>
    </div>
</template>

<script>
export default {
  props:[

  ],
  data() {
    return {
      navIndexName: 'home',
      navList: [{
        path: '/',
        title: '主页',
        name: 'home',
        params: {},
        icon: require('@/assets/images/icon-nav-home.png'),
        iconActive: require('@/assets/images/icon-nav-home-on.png'),
      }, {
        path: '/list',
        title: '博文',
        name: 'list',
        params: {},
        icon: require('@/assets/images/icon-nav-list.png'),
        iconActive: require('@/assets/images/icon-nav-list-on.png'),
      }, {
        path: '/mine',
        title: '我的',
        name: 'mine',
        params: {},
        icon: require('@/assets/images/icon-nav-mine.png'),
        iconActive: require('@/assets/images/icon-nav-mine-on.png'),
      }]
    }
  },
  methods: {
    changeNav(name) {
      console.log(this);
      this.navIndexName = name;
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .nav-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        padding: 0.3rem 0;
        text-decoration: none;
        color: #444;
        .nav-item-icon {
            width: 0.8rem;
            height: 0.8rem;
        }
        .nav-item-title {
            display: block;
            align-items: center;
            justify-content: center;
            font-size: 0.35rem;
            margin-top: 0.1rem;
            &.active {
                color: #00d8a0;
            }
        }
    }
}
</style>
