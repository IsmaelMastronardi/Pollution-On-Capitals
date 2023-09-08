import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPolution } from '../redux/cities/citiesSlice';
import DropdownMenu from './dropdownMenu';
import { CityList } from './citiesList';
import '../styles/city.css';
import AppTitle from './title';

const PollutionApp = () => {
  const { cities } = useSelector((store) => (store.citiesStore));
  const dispatch = useDispatch();
  useEffect(() => {
    cities.map((city) => dispatch(fetchPolution(city)));
  }, []);

  return (
    <>
      <DropdownMenu />
      <AppTitle />
      <CityList />
    </>
  );
};

export default PollutionApp;
