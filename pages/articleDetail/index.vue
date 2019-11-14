<template>
  <div class="articleDetail">
    <Head>
      <div class="headsection">
        <i class="el-icon-arrow-left" style="font-size: 1.75rem;" @click="back()"></i>
        <div class="titleType">阅读</div>
        <div><img src="../../assets/img/collect.png" /></div>
      </div>
    </Head>
  </div>
</template>

<script>
import Head from '~/components/Head.vue'

export default {
  components: {
    Head,
  },
  data() {
    return {
      list: new Array(20),
    }
  },
  methods:{
    back(){
      this.$router.back();
    }
  }
}
</script>

<style lang="less">
  .articleDetail{
    width: 100%;
    overflow-x: hidden;
    .headsection{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      .titleType{
        font-size: 1.25rem;
      }
      img{
        width: 1.5rem;
      }
    }
  }
</style>
