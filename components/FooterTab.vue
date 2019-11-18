<template>
  <div class="footer">
    <div @click="clickHandle('one')" class="part">
      <img :src="nowPart=='one'? require('../assets/img/one.png') :require('../assets/img/one-dash.png') " />
      <div class="name">ONE</div>
    </div>
    <div @click="clickHandle('all')" class="part">
      <img :src="nowPart=='all'? require('../assets/img/all.png') :require('../assets/img/all-dash.png') " />
      <div class="name">ALL</div>
    </div>
    <div @click="clickHandle('me')" class="part">
      <img :src="nowPart=='me'? require('../assets/img/me.png') :require('../assets/img/me-dash.png') " />
      <div class="name">ME</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        nowPart:'one'
      }
    },
    methods:{
      clickHandle(param){
        this.nowPart = param;
        this.$emit('handleClick',param);
      }
    }
  }
</script>

<style scoped lang="less">
  .footer{
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: @backgroundColor;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #5f6769;
  }
  .part{
    width: 3.75rem;
    text-align: center;
  }
  .part img{
    width: 1.75rem;
    background-size: cover;
  }
  .part .name{
    color: white;
    margin-top: -4px;
  }
</style>
