import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PollutionApp from './components/pollutionApp';
import SingleCity from './components/singleCity';

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<PollutionApp />} />
        <Route path="/:name" element={<SingleCity />} />
      </Routes>
    </>
  );
}

export default App;
