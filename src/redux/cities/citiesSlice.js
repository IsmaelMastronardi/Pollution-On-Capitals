import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiKey = '69f4010305ecd6da39559d7f47a939ed';

// export const fetchPolution = createAsyncThunk(
//   'polution',
//   async (lat, lon) => {
//     const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
//     const result = await response.text();
//     console.log(result);
//   },
// );

export const fetchPolution = createAsyncThunk(
  'polution',
  async (obj) => {
    console.log(obj.lat);
    console.log(obj.lon);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${obj.lat}&lon=${obj.lon}&appid=${apiKey}`);
    const result = await response.text();
    console.log(result);
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
};

const citiesSlice = createSlice({
  name: 'cities array',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPolution.pending, () => {
      console.log('pending');
    });
    builder.addCase(fetchPolution.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});
export default citiesSlice.reducer;
