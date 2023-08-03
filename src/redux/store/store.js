import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../slices/rooms';
import categoriesReducer from '../slices/categories';
import reviewsReducer from '../slices/reviews';
import userReducer from '../slices/userSlice';

const reducer = {
  user: userReducer,
  rooms: roomsReducer,
  categories: categoriesReducer,
  reviews: reviewsReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
