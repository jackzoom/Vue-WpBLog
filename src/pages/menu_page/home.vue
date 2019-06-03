<template>
<div class="menu-home" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
  <mt-loadmore :top-method="loadTop" ref="loadmore" :topDistance="40">
    <div class="nav-container no-header" infinite-scroll-disabled="loading">
      <div class="art-item" v-for="(item,index) in articleData" :key="index" @click="linkToDetail(item.id)">
        <img class="art-item-cover" :onerror="artErrorImg" :src="item.post_full_image" alt="">
        <!-- @error="this.src='../../assets/icon-art-logo.png'" -->
        <div class="art-item-content">
          <div class="art-content-text" v-html="item.excerpt.rendered">

          </div>
          <div class="art-content-tags">
            <span class="art-tags-date">{{item.post_date}}</span>
          </div>
        </div>
      </div>
      <div v-show="!loaded" class="loaded-box">
        <a href="javascript:;" @click="loadData">加载更多</a>
      </div>
      <!-- 加载完毕 -->
      <div v-show="loaded" class="loaded-box">
        加载完了~
      </div>
    </div>
  </mt-loadmore>
</div>
</template>
<script type="text/javascript">
import {
  Loadmore,
  InfiniteScroll
} from 'mint-ui';
export default {
  name: 'Home',
  data() {
    return {
      pageSize: 3,
      pageIndex: 1, //当前页索引
      loaded: false,
      loading: false,
      wrapperHeight: 0,
      artErrorImg: 'this.src="' + require('../../assets/images/bg-list-artcile.jpg') + '"',
      articleData: []
    }
  },
  methods: {
    linkToDetail: function(id) {
      const artid = id;
      this.$router.push({
        name: 'article_detail',
        params: {
          artid
        }
      });
    },
    loadTop() {
      const that = this;
      that.pageIndex = 1;
      that.loaded = false;
      this.$store.dispatch('getArticleList', {
        pageSize: this.pageSize,
        pageIndex: this.pageIndex
      }).then((data) => {
        console.log(data);
        this.articleData = data;
        this.$refs.loadmore.onTopLoaded();
        this.$refs.loadmore.onBottomLoaded();
        that.pageIndex += 1;
        if (data.length < this.pageSize) {
          that.loaded = true;
        }
      })
    },
    loadData() {
      console.log(this)
      this.loading = true;
      const that = this;
      if (that.loaded) {
        return
      }
      this.$store.dispatch('getArticleList', {
        pageSize: this.pageSize,
        pageIndex: this.pageIndex
      }).then((data) => {
        console.log(data);
        that.articleData = that.articleData.concat(data);
        that.loading = false;
        that.pageIndex += 1;
        if (data.length < this.pageSize) {
          that.loaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created: function() {
    this.loadData();
  },
  mounted() {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  },
  activated: function() {
    console.log("Home页面进入页面", this);
  },
  deactivated: function() {
    console.log("Home页面进入内存");
  },
  destroyed: function() {
    console.log('页面被销毁');
  },
  components: {
    'mt-loadmore': Loadmore,
  }
}
</script>
<style scoped lang="scss">
.art-item {
    padding: 0.3rem;
    margin: 0.3rem 0.2rem;
    background: #fff;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.3rem #ddd;
    // display: flex;
    .art-item-cover {
        width: 100%;
        height: 5rem;
        border-radius: 0.2rem;
    }
    .art-item-content {
        padding: 0.2rem;
    }
    .art-content-text {
        font-size: 0.35rem;
        color: #444;
        line-height: 1.2228;
        word-break: break-all;
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        // -webkit-line-clamp: 2;
        // overflow: hidden;
    }
    .art-content-tags {
        padding: 0.2rem 0;
        color: #888;
        position: relative;
    }
    .art-tags-date {
        display: inline-block;
        font-size: 0.3rem;
    }
}
</style>
