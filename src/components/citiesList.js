import { useSelector } from 'react-redux';
import SingleCity from './singleCity';

export const CityList = () => {
  const { cities, isLoading, filter } = useSelector((store) => (store.citiesStore));
  if (isLoading === 'false') {
    if (filter === 'all') {
      return (
        <>
          {cities.map((city) => <SingleCity key={city.name} obj={city} />)}
        </>
      );
    }
    const filteredArr = cities.filter((el) => el.data.main.aqi === Number(filter));
    return (
      <>
        {filteredArr.map((city) => <SingleCity key={city.name} obj={city} />)}
      </>
    );
  }
  return (
    <p>Loading...</p>
  );
};
export default CityList;
