const state = {
  show_login_dialog: false,
  sing_on: false, //未登录
  on_or_up: 'on',
  user_info: {
    id: 11,
    username: '复混肥',
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4'
  }
}
const actions = {
  change_show_state(context,onOrUP){
    context.commit('change_show_state',onOrUP)
  }
}
const mutations = {
  change_show_state(state,onOrUP){
      state.show_login_dialog = !state.show_login_dialog
  }
}

export default {
  namespaced:true,
  state,actions,mutations
}
