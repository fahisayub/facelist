import * as types from './auth.types'

export const loginApi=(payload)=>async(dispatch)=>{
dispatch({type:types.LOGIN_USER_LOADING});

try{
dispatch({type:types.LOGIN_USER_SUCCESS,payload:payload})
}catch(e){
dispatch({type:types.LOGIN_USER_FAILURE})
}

}

export const logoutApi=(payload)=>async(dispatch)=>{
dispatch({type:types.LOGOUT_USER_LOADING});

try{
dispatch({type:types.LOGOUT_USER_SUCCESS})
}catch(e){
dispatch({type:types.LOGOUT_USER_FAILURE})
}

}