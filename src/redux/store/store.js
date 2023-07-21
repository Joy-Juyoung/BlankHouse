import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../slices/rooms';
import categoriesReducer from '../slices/categories';

const reducer = {
  rooms: roomsReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
