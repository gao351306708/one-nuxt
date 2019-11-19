<template>
    <div class="allSection">
      <div class="bannerSection">
        <el-carousel height="200px">
          <el-carousel-item v-for="item in bannerList" :key="item">
            <img src="../../assets/img/3.gif" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="classifyGuide">
        <div class="guideTitle">分类导航</div>
        <div class="guide">
          <div class="part" @click="gotoActicleList(1)">1</div>
          <div class="part">2</div>
          <div class="part">3</div>
          <div class="part">4</div>
        </div>
      </div>
      <div class="subjectSection" v-for="item in bannerList" :key="item">
        <img src="../../assets/img/splash.jpg" />
        <div class="content">ONE[故事大全爆炸]科幻专题</div>
      </div>
      <div class="authorSection">
        <div class="authorTitle">近期热门作者</div>
        <div class="author" v-for="item in bannerList" :key="item">
          <img src="../../assets/img/me-dash.png" />
          <div class="info">
            <div>王若虚</div>
            <div>青年写作者，已出版作品集《在我的一生中你》</div>
          </div>
          <div class="btn">关注</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerList:[1,2,3],//banner列表
      }
    },
    mounted() {
    }
    ,
    methods:{
      gotoActicleList(key){
        this.$router.push('/acticleList')
      }
    }
  }
</script>

<style lang="less">
  .allSection{
    position: relative;
    top: 60px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 80px;
    width: 100%;
    overflow-x: hidden;
    .bannerSection{

    }
    .classifyGuide{
      margin: 1rem 0;
      padding: 1rem;
      background-color: @backgroundColor;
      .guideTitle{
        margin: 0.625rem 0;
        font-size: 1.125rem;
      }
      .guide{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .part{
          width: 4.5rem;
          height: 4.5rem;
          background-color: #ab8141;
          margin-right: 0.3125rem;
          margin-bottom: 0.3125rem;
        }
        .part:nth-child(4){
          margin-right: 0;
        }
      }
    }
    .subjectSection{
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: @backgroundColor;
      img{
        width: 100%;
        height: calc(100vw * 3/5);
      }
      .content{
        padding: 1rem 0;
      }
    }
    .authorSection{
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: @backgroundColor;
      .authorTitle{
        font-size: 1.125rem;
        padding: 1rem 0;
      }
      .author{
        display: flex;
        align-items: center;
        padding: 1rem 0;
        img{
          width: 3rem;
          height: 3rem;
        }
        .info{
          margin: 0 1rem;
        }
        .btn{
          width: 80px;
          height: 40px;
          padding: 0.5rem;
          border: 1px solid gray;
          text-align: center;
        }
      }
    }
  }
</style>
