import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiKey = '69f4010305ecd6da39559d7f47a939ed';

export const fetchPolution = createAsyncThunk(
  'polution',
  async (obj) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${obj.lat}&lon=${obj.lon}&appid=${apiKey}`);
    const result = await response.json();
    const { name } = obj;
    return (
      [name, result]
    );
  },
);

const initialState = {
  cities: [
    { name: 'Buenos Aires', lat: -34.6075682, lon: -58.4370894 },
    { name: 'London', lat: 51.5073219, lon: -0.1276474 },
    { name: 'Paris', lat: 48.8588897, lon: 2.3200410217200766 },
    { name: 'Alexandria', lat: 31.199004, lon: 29.894378 },
    { name: 'Cairo', lat: 30.0443879, lon: 31.2357257 },
  ],
  isLoading: 'true',
  filter: 'all',
};

const citiesSlice = createSlice({
  name: 'cities array',
  initialState,
  reducers: {
    choseFilter: (state, action) => {
      state.filter = action.payload;
      console.log(state.filter);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPolution.pending, (state) => {
      console.log('pending');
      state.isLoading = 'true';
    });
    builder.addCase(fetchPolution.fulfilled, (state, action) => {
      // console.log(action.payload[1].list);
      const targetCity = state.cities.find((el) => el.name === action.payload[0]);
      // eslint-disable-next-line prefer-destructuring
      targetCity.data = action.payload[1].list[0];
      const allLoaded = state.cities.every((obj) => 'data' in obj);
      if (allLoaded === true) {
        state.isLoading = 'false';
      }
    });
  },
});

export const { choseFilter } = citiesSlice.actions;
export default citiesSlice.reducer;
