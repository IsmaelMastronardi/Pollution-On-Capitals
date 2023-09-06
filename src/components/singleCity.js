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
  const keys = Object.keys(singleCity.data.components);
  const compArr = [];
  keys.forEach((key) => {
    compArr.push(`${key}: ${singleCity.data.components[key]}`);
  });
  return (
    <article>
      <div className="single-city-title-div">
        <p>
          city:
          {' '}
          {singleCity.name}
        </p>
      </div>
      <div>
        <p>Polution Breackdown</p>
      </div>
      <div>
        <ul>
          {compArr.map((el) => <p key={el}>{el}</p>)}
        </ul>
      </div>
    </article>
  );
};

// SingleCity.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   obj: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default SingleCity;
