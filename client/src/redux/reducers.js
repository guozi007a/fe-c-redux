import {combineReducers} from 'redux'
import { RECEIVE_USER } from './action-types'


function editQues(state={}, action) {
    switch(action.type) {
        case RECEIVE_USER:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    editQues,
})
