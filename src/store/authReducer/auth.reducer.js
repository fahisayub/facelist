import * as types from './auth.types';


let initState = {
    isLoading: false, isError: false, user: {}, isAuth: false,
}

export const authReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case types.LOGIN_USER_LOADING: return { ...state, isLoading: true, isError: false }
        case types.LOGIN_USER_SUCCESS: return { ...state, isLoading: false, isError: false, user: payload, isAuth: true }
        case types.LOGIN_USER_FAILURE: return { ...state, isLoading: false, isError: true }

        case types.LOGOUT_USER_LOADING: return { ...state, isLoading: true, isError: false }
        case types.LOGOUT_USER_SUCCESS: return { ...state, isLoading: false, isError: false, isAuth: false }
        case types.LOGOUT_USER_FAILURE: return { ...state, isLoading: false, isError: true }

        default: return state;
    }
}