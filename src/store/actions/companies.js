export const ADD_COMPANY = 'ADD_COMPANY';
export const REMOVE_COMPANY = 'REMOVE_COMPANY';

export const addCompany = (payload) => ({ type: ADD_COMPANY, payload });

export const removeCompany = (payload) => ({ type: REMOVE_COMPANY, payload });
