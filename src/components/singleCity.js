// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cityIcon from '../assets/icons/city-solid.svg';
import rigthArrow from '../assets/icons/circle-right-regular.svg';
import '../styles/title.css';
import '../styles/city.css';

const SingleCity = () => {
  const { name } = useParams();
  const { cities } = useSelector((store) => (store.citiesStore));
  const singleCity = cities.find((city) => city.name === name);
  const keys = Object.keys(singleCity.data.components);
  const compArr = [];
  keys.forEach((key) => {
    compArr.push({
      key,
      val: singleCity.data.components[key],
    });
    // compArr.push(`${key}: ${singleCity.data.components[key]}`);
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
                  <img src={rigthArrow} alt="" className="rigth-arrow" />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>

    </>
  );
};

// <Table striped bordered hover>
// <thead>
//   <tr>
//     <th>#</th>
//     <th>First Name</th>
//     <th>Last Name</th>
//     <th>Username</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>1</td>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>
//   <tr>
//     <td>2</td>
//     <td>Jacob</td>
//     <td>Thornton</td>
//     <td>@fat</td>
//   </tr>
//   <tr>
//     <td>3</td>
//     <td colSpan={2}>Larry the Bird</td>
//     <td>@twitter</td>
//   </tr>
// </tbody>
// </Table>

export default SingleCity;
