<template>
<div class="menu-home">
  <div class="article-content">
    <div class="article-header">
      <img :onerror="artErrorImg" :src="articleData.post_full_image">
      <div class="article-header-base">

      </div>
    </div>
  </div>

</div>
</template>
<script type="text/javascript">
export default {
  name: 'article_detail',
  props: {
    artid: String
  },
  data() {
    return {
      articleData: {},
      artErrorImg: 'this.src="' + require('../../assets/images/bg-list-artcile.jpg') + '"',
      articleID: null,
      title: '文章'
    }
  },
  methods: {
    getArticleDetail: function() {
      const that = this
      this.$store.dispatch('getArticleDetail', {
        id: that.articleID
      }).then((response) => {
        console.log(response);
        this.articleData = response
      }).catch((err) => {
        console.log(err)
      })
    },
  },
  created() {
    this.articleID = this.$route.params.artid;
    this.getArticleDetail();
  }
}
</script>
<style media="screen">
.article-header {
  position: relative;
  height: 5rem;
  width: 100%;
  margin-bottom: 2rem;
}

.article-header-base {
  position: absolute;
  bottom: -2rem;
  height: 2rem;
  left: 0;
  right: 0;
  background: #fff;
}
</style>
