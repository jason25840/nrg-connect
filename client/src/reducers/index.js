import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth'; // Example reducer

const rootReducer = combineReducers({
  auth: authReducer, // Include additional reducers here
});

export default rootReducer;
