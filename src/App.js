import {
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import PollutionApp from './components/pollutionApp';
import SingleCity from './components/singleCity';

function App() {
  const routeLoc = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-div">
        <Link to="/">
          <button type="button" className="arrowBtn">
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#ffffff' }} />
          </button>
        </Link>
        <p className="navbar-p">
          {routeLoc.pathname === '/' ? 'all view' : 'city view'}
        </p>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faMicrophone} style={{ color: '#ffffff' }} />
          <FontAwesomeIcon icon={faGear} style={{ color: '#ffffff' }} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<PollutionApp />} />
        <Route path="/:name" element={<SingleCity />} />
      </Routes>
    </nav>
  );
}

export default App;
