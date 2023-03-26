import * as types from './contact.types'
import axios from 'axios'
export const getContactsApi = (payload:number) => async (dispatch:any) => {

    dispatch({ type: types.GET_CONTACTS_LOADING });
//seed can be any fixed value
    await axios.get(`https://randomuser.me/api/?page=${payload}&results=10&seed=contacts`)
        .then((res:any) => {
            dispatch({ type: types.GET_CONTACTS_SUCCESS, payload: res.data.results });
            console.log(res.data.results);
        }).catch((err:any) => {
            dispatch({ type: types.GET_CONTACTS_FAILURE })
            console.log(err);

        })

}