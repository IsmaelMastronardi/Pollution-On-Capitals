import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/citiesSlice';

const store = configureStore({
  reducer: {
    citiesStore: citiesReducer,
  },
});

export default store;
