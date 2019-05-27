<template lang="html">
    <div class="container">
      <header class="header-bar">
        <span class="header-title">我的</span>
      </header>
      <div class="container-group">
      </div>
      <!-- <a href="javascript:;" @click="pageTo('/')">跳转Home</a> -->
    </div>
</template>

<script>
export default {
  name: 'MenuMine',
  data() {
    return {

    }
  },
  methods: {

  },
  created(){
    this.$nextTick(() => {
      console.log("created")
    })
  },
  mounted() {
    this.$nextTick(() => {
      console.log("mounted")
    })
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>

</style>
