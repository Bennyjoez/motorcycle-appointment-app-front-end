import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import * as ReactRedux from 'react-redux';
import { store } from '../redux/store';
import App from '../App';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

test('renders the App component', () => {
  const useDispatchMock = jest.spyOn(ReactRedux, 'useDispatch');
  useDispatchMock.mockReturnValue(jest.fn());

  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  screen.debug();
  // // Test for the Navigation component
  // const navigationElement = screen.getByText(/markets/i);
  // expect(navigationElement).toBeInTheDocument();

  // // Test for the Home component
  // const localCard = screen.getByText(//i);
  // expect(localCard).toBeInTheDocument();

  // // Test for the Profile component
  // const globalCard = screen.getByText(/global/i);
  // expect(globalCard).toBeInTheDocument();
});