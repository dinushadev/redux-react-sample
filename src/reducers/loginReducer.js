import * as types from '../actions/actionTypes';


export default function loginReducer(state ={},action){
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return [...state, Object.assign({}, action.user)];


  default:
      return state;

  }
}
