/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import cityIcon from '../assets/icons/city-solid.svg';
import '../styles/title.css';
import '../styles/city.css';
import { fetchPolution } from '../redux/cities/citiesSlice';

const SingleCity = () => {
  const { name } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { cities, isLoading } = useSelector((store) => (store.citiesStore));
  const dispatch = useDispatch();
  useEffect(() => {
    cities.map((city) => dispatch(fetchPolution(city)));
  }, []);
  if (isLoading === 'false') {
    const singleCity = cities.find((city) => city.name === name);
    const compArr = [];
    const keys = Object.keys(singleCity.data.components);
    keys.forEach((key) => {
      compArr.push({
        key,
        val: singleCity.data.components[key],
      });
    });
    return (
      <>
        <section>
          <div className="title-section">
            <div className="width-50">
              <img src={cityIcon} className="earth-logo" alt="" />
            </div>
            <div className="width-50">
              <p className="title-p">
                city:
              </p>
              <p className="title-p">
                {singleCity.name}
              </p>
            </div>
          </div>
        </section>
        <div>
          <p className="subtitle">POLUTION BREACKDOWN</p>
        </div>
        <article>
          <section>
            <ul className="components-list">
              {compArr.map((el, index) => (
                <li key={el.key} className={index % 2 === 0 ? 'component-item city-div-dark' : 'component-item item-ligth'}>
                  <p className="component-name">{el.key.toUpperCase()}</p>
                  <div className="city-item-rigth">
                    <p className="component-value">{el.val}</p>
                    <FontAwesomeIcon icon={faCircleRight} style={{ color: '#f8f9fc' }} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </>
    );
  }
 return (
   <p>Loading</p>
 );
};

export default SingleCity;
