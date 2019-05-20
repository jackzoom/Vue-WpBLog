<template>
    <div class="menu-home">
        <h2>{{title+articleID}}</h2>
    </div>
</template>
<script type="text/javascript">
  export default {
    name:'article',
    props:{
      artid:String
    },
    data(){
      return {
        articleID:null,
        title:'文章'
      }
    },
    methods:{
      getArticleDetail: function() {
        const that = this
        this.axios.get(apiURL.article_detail+that.articleID).then((response) => {
          console.log(response.data);
          this.articleData = response.data
        })
      },
    },
    created(){
      this.articleID = this.$route.params.artid;
      this.getArticleDetail();
    }
  }
</script>
