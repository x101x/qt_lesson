import * as api from '../api'

export const getAllMessages = ({commit}) =>{
  api.getAllMessages(message =>{
    commit('receiveAll',message)
  })
}
export const sendAllMessages = ({commit},payload) =>{

}
export const switchTgread = ({commit},payload) =>{
  setCurrentThread(state,id)
}
function setCurrentThread(state,id) {
  state.currentThreadID = id
  state.threads[id].lastMessage.isRead = true
}