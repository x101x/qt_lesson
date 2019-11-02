const data = require('./mock-data')
export function getAllMessages(cb){
  setTimeout(()=>{
    cb(data)
  },2)
}