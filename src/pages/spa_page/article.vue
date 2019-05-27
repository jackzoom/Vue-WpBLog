<template>
<div class="menu-home">
  <h2>{{title+articleID}}</h2>
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
        this.articleData = response.data
      }).catch((err)=>{
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
