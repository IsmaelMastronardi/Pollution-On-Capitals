import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Beijing from '../../assets/icons/cityPictures/Beijing.avif';
import Berlin from '../../assets/icons/cityPictures/Berlin.avif';
import BsAs from '../../assets/icons/cityPictures/BsAs.avif';
import Cairo from '../../assets/icons/cityPictures/Cairo.avif';
import LaPaz from '../../assets/icons/cityPictures/La paz.avif';
import London from '../../assets/icons/cityPictures/London.avif';
import Moscow from '../../assets/icons/cityPictures/Moscow.avif';
import Nairobi from '../../assets/icons/cityPictures/Nairobi.avif';
import NewDelhi from '../../assets/icons/cityPictures/New Delhi.avif';
import Paris from '../../assets/icons/cityPictures/Paris.avif';

const apiKey = '69f4010305ecd6da39559d7f47a939ed';

export const fetchPolution = createAsyncThunk(
  'polution',
  async (obj) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${obj.lat}&lon=${obj.lon}&appid=${apiKey}`);
      const result = await response.json();
      const { name } = obj;
      return (
        [name, result]
      );
    } catch (error) {
      throw Error(error);
    }
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
    {
      name: 'Buenos Aires', lat: -34.6075682, lon: -58.4370894, pic: BsAs,
    },
    {
      name: 'London', lat: 51.5073219, lon: -0.1276474, pic: London,
    },
    {
      name: 'Paris', lat: 48.8588897, lon: 2.3200410217200766, pic: Paris,
    },
    {
      name: 'Cairo', lat: 30.0443879, lon: 31.2357257, pic: Cairo,
    },
    {
      name: 'Beijing', lat: 39.906217, lon: 116.3912757, pic: Beijing,
    },
    {
      name: 'New Delhi', lat: 28.6138954, lon: 77.2090057, pic: NewDelhi,
    },
    {
      name: 'Moscow', lat: 55.7504461, lon: 37.6174943, pic: Moscow,
    },
    {
      name: 'Berlin', lat: 52.5170365, lon: 13.3888599, pic: Berlin,
    },
    {
      name: 'La Paz', lat: -16.4955455, lon: -68.1336229, pic: LaPaz,
    },
    {
      name: 'Nairobi', lat: -1.30326415, lon: -36.826384099341595, pic: Nairobi,
    },
  ],
  isLoading: true,
  filter: 'all',
  hasError: false,
  errorMesage: '',
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
      state.isLoading = true;
    });
    builder.addCase(fetchPolution.fulfilled, (state, action) => {
      const targetCity = state.cities.find((el) => el.name === action.payload[0]);
      const data = action.payload[1].list[0];
      targetCity.data = data;
      const allLoaded = state.cities.every((obj) => 'data' in obj);
      if (allLoaded === true) {
        state.isLoading = false;
      }
    });
    builder.addCase(fetchPolution.rejected, (state, action) => {
      state.hasError = true;
      state.errorMesage = action.error.message;
    });
  },
});

export const { choseFilter } = citiesSlice.actions;
export default citiesSlice.reducer;
