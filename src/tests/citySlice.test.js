import reducer, { choseFilter } from '../redux/cities/citiesSlice';

describe('test for citySlice reducers', () => {
  test('returns initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      {
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
      },
    );
  });
  test('changes initial filter to 1', () => {
    const prevState = {
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
    expect(reducer(prevState, choseFilter(5))).toEqual(
      {
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
        filter: 5,
      },
    );
  });
});
