// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/prefer-default-export
export const SingleCity = ({ name }) => (
  <p>{name}</p>
);

SingleCity.propTypes = {
  name: PropTypes.string.isRequired,
};
