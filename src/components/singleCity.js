// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// const SingleCity = ({ obj }) => (
//   <>
//     <p>{obj.name}</p>
//     <h3>{obj.data.main.aqi}</h3>
//     <ul>
//       <li>{obj.data.components.co}</li>
//     </ul>
//   </>
// );
const SingleCity = () => {
  const { name } = useParams();
  const { cities } = useSelector((store) => (store.citiesStore));
  const singleCity = cities.find((city) => city.name === name);
  console.log(singleCity);
  return (
    <>
      <p>
        city :
        {' '}
        {singleCity.name}
      </p>
    </>
  );
};

// SingleCity.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   obj: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default SingleCity;
