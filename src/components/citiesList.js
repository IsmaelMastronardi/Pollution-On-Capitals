/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';

export const CityList = () => {
  const { cities, isLoading, filter } = useSelector((store) => (store.citiesStore));
  if (isLoading === 'false') {
    if (filter === 'all') {
      return (
        <section className="city-section">
          {cities.map((city, index) => (
            <Link
              to={`/${city.name}`}
              key={city.name}
              className={2 % index === 0 ? 'city-div city-div-dark' : 'city-div city-div-ligth'}
            >
              <FontAwesomeIcon icon={faCity} size="2x1" style={{ color: '#b13968' }} className="city-logo" />
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
