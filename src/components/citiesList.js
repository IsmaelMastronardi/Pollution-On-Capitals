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
      // return (
      //   <section className="city-section">
      //     {cities.map((city, index) => (
      //       <div key={city.name} className={index % 2 === 0 ? 'city-div' : 'city-div-ligth'}>
      //         <Link to={`/${city.name}`} key={city.name} className="city-link">
      //           {city.name}
      //         </Link>
      //         <p>
      //           AQI:
      //           {city.data.main.aqi}
      //         </p>
      //       </div>
      //     ))}
      //   </section>
      // );
      return (
        <section className="city-section">
          {cities.map((city, index) => (
            <Link to={`/${city.name}`} key={city.name} className={index % 2 === 0 ? 'city-div' : 'city-div-ligth'}>
              <div key={city.name}>
                <p>
                  {city.name}
                </p>
                <p>
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
