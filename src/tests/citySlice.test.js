import reducer, { choseFilter, fetchPolution } from '../redux/cities/citiesSlice';
import Beijing from '../assets/icons/cityPictures/Beijing.avif';
import Berlin from '../assets/icons/cityPictures/Berlin.avif';
import BsAs from '../assets/icons/cityPictures/BsAs.avif';
import Cairo from '../assets/icons/cityPictures/Cairo.avif';
import LaPaz from '../assets/icons/cityPictures/La paz.avif';
import London from '../assets/icons/cityPictures/London.avif';
import Moscow from '../assets/icons/cityPictures/Moscow.avif';
import Nairobi from '../assets/icons/cityPictures/Nairobi.avif';
import NewDelhi from '../assets/icons/cityPictures/New Delhi.avif';
import Paris from '../assets/icons/cityPictures/Paris.avif';

describe('test for citySlice reducers', () => {
  test('returns initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      {
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
      },
    );
  });
  test('changes initial filter to 1', () => {
    const prevState = {
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
    expect(reducer(prevState, choseFilter(5))).toEqual(
      {
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
        filter: 5,
        hasError: false,
        errorMesage: '',
      },
    );
  });
});

describe('test for extra reducers', () => {
  const prevState = {
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
    filter: 5,
    hasError: false,
    errorMesage: '',
  };
  test('loading state', () => {
    const action = { type: fetchPolution.pending.type };
    const state = reducer(prevState, action);
    expect(state).toEqual(
      {
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
        filter: 5,
        hasError: false,
        errorMesage: '',
      },
    );
  });
  test('loading done ', () => {
    const action = {
      type: fetchPolution.fulfilled.type,
      payload: [
        'Buenos Aires',
        {
          coord: { lon: -58.4371, lat: -34.6076 },
          list: [{
            components:
                {
                  co: 267.03, nh3: 1.14, no: 0.04, no2: 8.14, o3: 30.04, pm2_5: 1.9, so2: 3.7,
                },
            dt: 1694146911,
            main:
                { aqi: 1 },
          }],
        }],
    };
    const state = reducer(prevState, action);
    expect(state).toEqual(
      {
        cities: [
          {
            name: 'Buenos Aires',
            lat: -34.6075682,
            lon: -58.4370894,
            pic: BsAs,
            data: {
              components: {
                co: 267.03,
                nh3: 1.14,
                no: 0.04,
                no2: 8.14,
                o3: 30.04,
                pm2_5: 1.9,
                so2: 3.7,
              },
              dt: 1694146911,
              main: {
                aqi: 1,
              },
            },
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
        filter: 5,
        hasError: false,
        errorMesage: '',
      },
    );
  });
});
