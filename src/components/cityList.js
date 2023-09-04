import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SingleCity } from './singleCity';
import { fetchPolution } from '../redux/cities/citiesSlice';

// eslint-disable-next-line import/prefer-default-export
export const CityList = () => {
  const { cities } = useSelector((store) => (store.citiesStore));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPolution(cities[0]));
  });

  return (
    <>
      {cities.map((city) => <SingleCity key={city.name} name={city.name} />)}
    </>
  );
};
