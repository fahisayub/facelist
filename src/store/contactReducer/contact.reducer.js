import * as types from './contact.types';


let initState = {
    isLoading: false, isError: false, contacts: []
}

export const contactReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case types.GET_CONTACTS_LOADING: return { ...state, isLoading: true, isError: false }
        case types.GET_CONTACTS_SUCCESS: return { ...state, isLoading: false, isError: false, contacts: payload }
        case types.GET_CONTACTS_FAILURE: return { ...state, isLoading: false, isError: true }

        default: return state;
    }
}