import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';

export const CityList = () => {
  const {
    cities,
    isLoading,
    filter,
    hasError,
    errorMesage,
  } = useSelector((store) => (store.citiesStore));
  if (isLoading === false && hasError === false) {
    let filteredArr = cities;
    if (filter !== 'all') {
      filteredArr = cities.filter((el) => el.data.main.aqi === Number(filter));
    }
    return (
      <section className="city-section">
        {filteredArr.map((city, index) => (
          <Link
            to={`/${city.name}`}
            key={city.name}
            className={(index) % 2 === 0 ? 'city-div pink3' : 'city-div pink4'}
          >
            <FontAwesomeIcon icon={faCity} style={{ color: '#b13968' }} className="city-logo" />
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
  if (hasError === true) {
    return (
      <p>{errorMesage}</p>
    );
  }
  return (
    <div className="loading pink1">
      <p className="loadingText">Loading...</p>
    </div>
  );
};
export default CityList;
