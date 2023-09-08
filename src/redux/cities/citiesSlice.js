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

export const saveToLocalStorage = createAsyncThunk(
  'localStorage',
  async (obj) => {
    const saveState = JSON.stringify(obj);
    localStorage.setItem('savedCity', saveState);
  },
);

const initialState = {
  cities: [
    { name: 'Buenos Aires', lat: -34.6075682, lon: -58.4370894 },
    { name: 'London', lat: 51.5073219, lon: -0.1276474 },
    { name: 'Paris', lat: 48.8588897, lon: 2.3200410217200766 },
    { name: 'Cairo', lat: 30.0443879, lon: 31.2357257 },
    { name: 'Beijing', lat: 39.906217, lon: 116.3912757 },
    { name: 'New Delhi', lat: 28.6138954, lon: 77.2090057 },
    { name: 'Moscow', lat: 55.7504461, lon: 37.6174943 },
    { name: 'Berlin', lat: 52.5170365, lon: 13.3888599 },
    { name: 'La Paz', lat: -16.4955455, lon: -68.1336229 },
    { name: 'Nairobi', lat: -1.30326415, lon: -36.826384099341595 },
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPolution.pending, (state) => {
      state.isLoading = 'true';
    });
    builder.addCase(fetchPolution.fulfilled, (state, action) => {
      const targetCity = state.cities.find((el) => el.name === action.payload[0]);
      const data = action.payload[1].list[0];
      targetCity.data = data;
      const allLoaded = state.cities.every((obj) => 'data' in obj);
      if (allLoaded === true) {
        state.isLoading = 'false';
      }
    });
  },
});

export const { choseFilter } = citiesSlice.actions;
export default citiesSlice.reducer;
