/**
 * 此文件作为home模块导出，以文件名作为模块名，如需获取其中得state，这如下方式store.state.home.list
 * **/
export const state = () => ({
  list: [],
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
