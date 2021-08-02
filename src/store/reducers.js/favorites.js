import { ADD_COMPANY, REMOVE_COMPANY } from '../actions/companies';

const initialState = { companies: [] };

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
        companies: state.companies.concat(action.payload),
      };
    case REMOVE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company !== action.payload
        ),
      };
    default:
      return state;
  }
};
