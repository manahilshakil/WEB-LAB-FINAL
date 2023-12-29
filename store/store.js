import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import emojiReducer from '../slices/emojiSlice';
import detailReducer from '../slices/detailSlice';

const rootReducer = combineReducers({
  categories: emojiReducer,
  details: detailReducer,  
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
