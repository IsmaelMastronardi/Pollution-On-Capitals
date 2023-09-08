import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
        {filteredArr.map((city) => (
          <Link
            to={`/${city.name}`}
            key={city.name}
            className="city-div"
          >
            <div key={city.name} className="city-content">
              <img src={city.pic} alt={`${city.name}`} className="cityPic" />
              <div className="position-absolute">
                <p className="city-name">
                  {city.name.toUpperCase()}
                </p>
                <p className="city-name">
                  Air Quality Index:
                  {city.data.main.aqi}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    );
  }
  if (hasError === true) {
    return (
      <div className="loading pink1">
        <p className="loadingText">{errorMesage}</p>
      </div>
    );
  }
  return (
    <div className="loading pink1">
      <p className="loadingText">Loading...</p>
    </div>
  );
};
export default CityList;
