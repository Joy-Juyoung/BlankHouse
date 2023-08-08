import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../slices/roomSlice';
import categoryReducer from '../slices/categorySlice';
import roomReviewSlice from '../slices/roomReviewSlice';
import userReducer from '../slices/userSlice';
import wishlistSlice from '../slices/wishlistSlice';

const reducer = {
  user: userReducer,
  room: roomReducer,
  category: categoryReducer,
  review: roomReviewSlice,
  wishlist: wishlistSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
