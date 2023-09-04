// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const SingleCity = ({ obj }) => (
  <>
    <p>{obj.name}</p>
    <h3>{obj.data.main.aqi}</h3>
    <ul>
      <li>{obj.data.components.co}</li>
    </ul>
  </>
);

SingleCity.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SingleCity;
