<template>
  <div :class="['head',{ transitions: fade }]">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    props:['fade'],
    data() {
      return {
        classFlag:true,
      }
    },

  }
</script>

<style lang="less" scoped>
  .head{
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: @backgroundColor;
    border-bottom: 1px solid #5f6769;
    z-index: 10;
    transition: background-color 1s;
  }
  .transitions{
    background-color: transparent;
    border: none;
  }
</style>
