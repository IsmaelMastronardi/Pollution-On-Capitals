import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppTitle from '../components/title';
import store from '../redux/store';

describe('test for the title component', () => {
  test('renders title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppTitle />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(5)).toBeInTheDocument();
  });
});
