import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PollutionApp from './components/pollutionApp';
import SingleCity from './components/singleCity';
import arrow from './assets/icons/chevron-left-solid.svg';

function App() {
  return (
    <>
      <Link to="/">
        <button type="button" className="arrowBtn">
          <img src={arrow} alt=" go back" className="arrow" />
        </button>
      </Link>
      <Routes>
        <Route path="/" element={<PollutionApp />} />
        <Route path="/:name" element={<SingleCity />} />
      </Routes>
    </>
  );
}

export default App;
