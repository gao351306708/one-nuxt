<template>
  <div v-if="loading" class="loading-page">
    <div class="loading">
      <i class="el-icon-loading"></i>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: sans-serif;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading{
  display: flex;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  border-radius: 8px;
  background: #bfbfbf;
}
</style>
