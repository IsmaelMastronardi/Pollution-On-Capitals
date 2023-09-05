import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPolution } from '../redux/cities/citiesSlice';
import DropdownMenu from './dropdownMenu';
import CitiesList from './citiesList';

// eslint-disable-next-line import/prefer-default-export
// export const CityList = () => {
//   const { cities, isLoading } = useSelector((store) => (store.citiesStore));
//   const dispatch = useDispatch();
//   useEffect(() => {
//     cities.map((city) => dispatch(fetchPolution(city)));
//   }, []);
//   if (isLoading === 'false') {
//     return (
//       <>
//         {cities.map((city) => <SingleCity key={city.name} obj={city} />)}
//       </>
//     );
//   }
//   return (
//     <p>Loading...</p>
//   );
// };

const PollutionApp = () => {
  const { cities } = useSelector((store) => (store.citiesStore));
  const dispatch = useDispatch();
  useEffect(() => {
    cities.map((city) => dispatch(fetchPolution(city)));
  }, []);

  return (
    <>
      <DropdownMenu />
      <CitiesList />
    </>
  );
  // if (isLoading === 'false') {
  //   return (
  //     <>
  //       {cities.map((city) => <SingleCity key={city.name} obj={city} />)}
  //     </>
  //   );
  // }
  // return (
  //   <p>Loading...</p>
  // );
};

export default PollutionApp;
