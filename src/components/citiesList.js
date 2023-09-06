import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cityIcon from '../assets/icons/city-solid.svg';

export const CityList = () => {
  const { cities, isLoading, filter } = useSelector((store) => (store.citiesStore));
  if (isLoading === 'false') {
    if (filter === 'all') {
      return (
        <section className="city-section">
          {cities.map((city, index) => (
            <Link to={`/${city.name}`} key={city.name} className={index % 2 === 0 ? 'city-div city-div-dark' : 'city-div city-div-ligth'}>
              <img src={cityIcon} alt="" className="city-icon" />
              <div key={city.name} className="city-text">
                <p className="city-name">
                  {city.name.toUpperCase()}
                </p>
                <p className="city-name">
                  AQI:
                  {city.data.main.aqi}
                </p>
              </div>
            </Link>
          ))}
        </section>
      );
    }
    const filteredArr = cities.filter((el) => el.data.main.aqi === Number(filter));
    return (
      <div>
        {filteredArr.map((city) => <Link to={`/${city.name}`} key={city.name}>{city.name}</Link>)}
      </div>
    );
  }
  return (
    <p>Loading...</p>
  );
};
export default CityList;
