import { useSelector } from 'react-redux';
import earth from '../assets/icons/earth-americas-solid.svg';
import '../styles/title.css';

const AppTitle = () => {
  const { cities, filter } = useSelector((store) => (store.citiesStore));
  return (
    <>
      <section className="title-section">
        <div className="width-50">
          <img src={earth} alt="" className="earth-logo" />
        </div>
        <div className="width-50">
          <p className="title-p">
            SELECTED CAPITALS :
            {' '}
          </p>
          <p className="title-p">
            {filter === 'all' ? cities.length : cities.filter((el) => el.data.main.aqi === Number(filter)).length}
          </p>
        </div>
      </section>
      <div>
        <p className="subtitle">POLLUTION IN CAPITAL CITY</p>
      </div>
    </>
  );
};

export default AppTitle;
