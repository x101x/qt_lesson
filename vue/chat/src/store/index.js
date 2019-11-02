import Vue from 'vue' 
import Vuex from 'vuex' 
import * as getters from "./getters"
import * as actions from "./actions"
import  mutations from "./mutations"

Vue.use(Vuex)

const state = {
  currentThreadID:null,
  threads: {},
  message:{}
}

export default new Vuex.Store({
  namespaced:true,
  state,getters,actions,mutations
})