<template lang="html">

    <div class="container">
      <header class="header-bar">
        <span class="header-title">圈子</span>
      </header>
      <div class="container-group">
        <scroll ref="scroll" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" @pullingDown="onPullingDown">
        </scroll>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstAnime: false,
      scrollbar: false,
      scrollbarFade: true,
      pullDownRefresh: true,
      pullDownRefreshThreshold: 80,
      pullDownRefreshStop: 20
    }
  },
  methods: {
    onPullingDown() {
      console.log("下拉松开");
      this.$refs.scroll.forceUpdate(true);
    }
  },
  computed: {
    scrollbarObj: function() {
      return this.scrollbar ? {
        fade: this.scrollbarFade
      } : false
    },
    pullDownRefreshObj: function() {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        stop: parseInt(this.pullDownRefreshStop)
      } : false
    },
    pullUpLoadObj: function() {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {
          more: "加载更多",
          noMore: "没有更多啦"
        }
      } : false
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
