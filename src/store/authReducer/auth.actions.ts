import { UserProps } from '../../components/LoginForm';
import * as types from './auth.types'

export const loginApi=(payload:UserProps)=>async(dispatch:any)=>{
dispatch({type:types.LOGIN_USER_LOADING});

try{
dispatch({type:types.LOGIN_USER_SUCCESS,payload:payload})
}catch(e){
dispatch({type:types.LOGIN_USER_FAILURE})
}

}

export const logoutApi=()=>async(dispatch:any)=>{
dispatch({type:types.LOGOUT_USER_LOADING});

try{
dispatch({type:types.LOGOUT_USER_SUCCESS})
}catch(e){
dispatch({type:types.LOGOUT_USER_FAILURE})
}

}