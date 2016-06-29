import * as types from './actionTypes';
import LoginSvcApi from '../api/LoginSvcApi';

export function loginSuccess(user){
  return { type:types.LOGIN_SUCCESS, user};
}


export function login(user){
    return function(dispatch){
      
      return LoginSvcApi.login(user).then(loginUser =>{
        dispatch(loginSuccess(loginUser));
      }).catch(err =>{
        throw(err);
      });
    };
}
