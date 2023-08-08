import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../slices/rooms';
import categoriesReducer from '../slices/categories';
import usersReducer from '../slices/users';
import reviewsReducer from '../slices/reviews';
import experiencesReducer from '../slices/experiences';


const reducer = {
  rooms: roomsReducer,
  categories: categoriesReducer,
  users: usersReducer,
  reviews: reviewsReducer,
  experiences: experiencesReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
