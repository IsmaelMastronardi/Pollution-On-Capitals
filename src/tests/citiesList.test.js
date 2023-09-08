import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Citylist from '../components/citiesList';

describe('CityList components', () => {
  test('renders Loading state', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Citylist />
        </BrowserRouter>
      </Provider>,
    );
    waitFor(() => {
      expect(screen.getByText('London')).toBeInTheDocument();
    });
  });
});
