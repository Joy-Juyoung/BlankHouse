import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../slices/roomSlice';
import categoryReducer from '../slices/categorySlice';
import reviewReducer from '../slices/reviewSlice';
import userReducer from '../slices/userSlice';

const reducer = {
  user: userReducer,
  room: roomReducer,
  category: categoryReducer,
  review: reviewReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
