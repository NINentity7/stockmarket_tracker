import { createStore } from 'redux';
import { reducers } from './reducers.js';

export const store = createStore(reducers);
