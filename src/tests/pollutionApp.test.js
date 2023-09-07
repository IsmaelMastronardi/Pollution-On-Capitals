import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import PollutionApp from '../components/pollutionApp';
import store from '../redux/store';

describe('test fot the pollutionApp component', () => {
  test('searches for Dropdown component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PollutionApp />
        </BrowserRouter>
      </Provider>,
    );
    const option1 = screen.getByText(1);
    expect(option1).toBeInTheDocument();
  });
  test('searches for CityList component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PollutionApp />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('SELECTED CAPITALS :')).toBeInTheDocument();
  });
  test('searches for CityList component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PollutionApp />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
