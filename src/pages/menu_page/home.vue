<template>
<div class="menu-home">
  <div class="art-group">
    <div class="art-item" v-for="(item,index) in articleData" :key="index" @click="linkToDetail(item.id)">
      <img class="art-item-cover" :onerror="artErrorImg" :src="item.post_thumbnail_image" alt="">
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

</div>
</template>
<script type="text/javascript">
export default {
  name: 'Home',
  data() {
    return {
      artErrorImg: 'this.src="' + require('../../assets/icon-art-logo.png') + '"',
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
    }
  },
  created: function() {
    this.getArticleList();
    console.log(this.$store)
  },
  components: {

  }
}
</script>
<style scoped lang="scss">
.art-item {
    padding: 0.3rem;
    margin: 0.2rem;
    background: #fff;
    border-radius: 0.15rem;
    display: flex;
    .art-item-cover {
        width: 1rem;
        height: 1rem;
        margin-right: 0.3rem;
        min-width: 1rem;
    }
    .art-item-content {
        width: 100%;
    }
    .art-content-text {
        font-size: 0.35rem;
        color: #444;
        line-height: 1.2228;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
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
