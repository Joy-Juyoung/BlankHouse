import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../slices/roomSlice';
import categoryReducer from '../slices/categorySlice';
import roomReviewSlice from '../slices/roomReviewSlice';
import userReducer from '../slices/userSlice';
import wishlistSlice from '../slices/wishlistSlice';
import bookingReducer from '../slices/bookingSlice';
import hostReducer from '../slices/hostSlice';

const reducer = {
  user: userReducer,
  room: roomReducer,
  booking: bookingReducer,
  category: categoryReducer,
  review: roomReviewSlice,
  wishlist: wishlistSlice,
  host: hostReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
