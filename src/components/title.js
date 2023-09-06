import { useSelector } from 'react-redux';

const AppTitle = () => {
  const { cities, filter } = useSelector((store) => (store.citiesStore));
  return (
    <section>
      <p>
        Selected Capitals:
        {' '}
        {filter === 'all' ? cities.length : cities.filter((el) => el.data.main.aqi === Number(filter)).length}
      </p>
    </section>
  );
};

export default AppTitle;
