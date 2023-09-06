import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// export const CityList = () => {
//   const { cities, isLoading, filter } = useSelector((store) => (store.citiesStore));
//   if (isLoading === 'false') {
//     if (filter === 'all') {
//       return (
//         <>
//           {cities.map((city) =>
//     <Link to={`/${city.name}`} key={city.name}><SingleCity key={city.name} obj={city} /></Link>)}
//         </>
//       );
//     }
//     const filteredArr = cities.filter((el) => el.data.main.aqi === Number(filter));
//     return (
//       <>
//         {filteredArr.map((city) => <SingleCity key={city.name} obj={city} />)}
//       </>
//     );
//   }
//   return (
//     <p>Loading...</p>
//   );
// };
export const CityList = () => {
  const { cities, isLoading, filter } = useSelector((store) => (store.citiesStore));
  if (isLoading === 'false') {
    if (filter === 'all') {
      return (
        <section className="city-section">
          {cities.map((city) => (
            <div key={city.name} className="city-div">
              <Link to={`/${city.name}`} key={city.name} className="city-link">
                {city.name}
              </Link>
              <p>
                AQI:
                {city.data.main.aqi}
              </p>
            </div>
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
