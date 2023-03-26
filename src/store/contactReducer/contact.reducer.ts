import { ContactProp } from "../../components/ContactCardComp";
import * as types from "./contact.types";

interface ContactReducerProp {
  isLoading: boolean;
  isError: boolean;
  contacts: ContactProp[];
}

let initState:ContactReducerProp = {
  isLoading: false,
  isError: false,
  contacts: [],
};

export const contactReducer = (state:ContactReducerProp = initState, { type, payload }) => {
  switch (type) {
    case types.GET_CONTACTS_LOADING:
      return { ...state, isLoading: true, isError: false };

    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        contacts: [...state.contacts, ...payload],
      };

    case types.GET_CONTACTS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
