/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import cityIcon from '../assets/icons/city-solid.svg';
import '../styles/title.css';
import '../styles/city.css';

const SingleCity = () => {
  const { name } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { cities } = useSelector((store) => (store.citiesStore));
  const savedArray = JSON.parse(localStorage.getItem('savedCities'));
  const singleCity = savedArray.find((city) => city.name === name);
  console.log(savedArray);
  const compArr = [];
  const keys = Object.keys(singleCity.data.components);
  keys.forEach((key) => {
    compArr.push({
      key,
      val: singleCity.data.components[key],
    });
  });
  console.log(compArr);
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
};

export default SingleCity;
