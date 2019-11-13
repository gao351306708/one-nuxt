<template>
  <div class="container">
    <nuxt-link to='/home'>click</nuxt-link>
  </div>
</template>
<script>
export default {
  transition: {
    name:'splash',
    mode:'out-in'
  },
  mounted() {
    setTimeout(()=>{
      // this.$router.replace('/home');
    },2000)
  }
}
</script>
<style scoped>
.container {
  position: fixed;
  height: 100vh;
  width: 100vh;
  background: url('../assets/img/splash.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
