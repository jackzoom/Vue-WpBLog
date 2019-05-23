<template>
<div class="menu-home" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
  <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore" :topDistance="40">
    <div class="nav-container no-header" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
      <div  class="art-item" v-for="(item,index) in articleData" :key="index" @click="linkToDetail(item.id)">
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
      loading:false,
      wrapperHeight: 0,
      allLoaded: false,
      artErrorImg: 'this.src="' + require('../../assets/images/bg-list-artcile.jpg') + '"',
      articleData: []
    }
  },
  methods: {
    getArticleList: function() {
      const that = this
      this.axios.get(apiURL.article_list).then((response) => {
        console.log(response.data);
        this.articleData = response.data
      })
    },
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
      const that = this
      this.axios.get(apiURL.article_list).then((response) => {
        console.log(response.data);
        this.articleData = response.data;
        this.$refs.loadmore.onTopLoaded();
      })
    },
    loadMore() {
      this.loading = true;
      const that = this
      this.axios.get(apiURL.article_list).then((response) => {
        console.log(response.data);
        that.articleData = that.articleData.concat(response.data);
        setTimeout(()=>{
          that.loading = false;
        },10000)
      })
    }
  },
  created: function() {
    this.getArticleList();
    console.log(this.$store)
  },
  mounted() {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
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
        height: 1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
