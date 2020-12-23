// 事件行为action，有type和data
import { reqUser, reqSaveQues } from '../api/index'
import { RECEIVE_USER } from './action-types'
import { message } from 'antd'

// 获取用户信息的同步action
const receiveUser = (user) => ({ type: RECEIVE_USER, data: user })
// 获取用户信息的异步action
export const getUser = () => {
   return async dispatch => {
      const res = await reqUser()
      const result = res.data 
      if(result.code === 0) {
         dispatch(receiveUser(result.data))
      }
   }
}

// 保存问题的异步action
export const saveQuesAsync = ({quesTittle, quesContent, publishDate, nickname}) => {
   return async dispatch => {
      const res = await reqSaveQues({quesTittle, quesContent, publishDate, nickname})
      const result = res.data 
      if(result.code === 0) {
         dispatch(receiveUser(result.data))
         message.success('问题发布成功!')
      }
   }
}
