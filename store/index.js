/**
 * 此文件作为store得跟节点，其中得state和action都可直接获取调用，如：store.state.counter
 * **/
export const state = () => ({
  counter: 0,
  currentTab:'',//当前home底部页签标志，值为：one,all,me
  footerFlag:true,//home页面底部栏显隐
})

export const mutations = {
  updateCurrent (state,payload) {
    state.currentTab = payload.currentTab;
  },
  updateFooterFlag (state,payload) {
    state.footerFlag = payload.footerFlag;
  }
}
export const actions = {
}
export const getters = {
}
