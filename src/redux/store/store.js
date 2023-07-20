import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../slices/rooms';

const reducer = {
  rooms: roomsReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;