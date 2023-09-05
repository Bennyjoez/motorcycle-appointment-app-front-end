import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import Reservations from '../components/pages/reservations';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const reducer = (state = {}) => state;

const initialState = {
  state: {
    sessions: {
      user: { id: 1 },
      loggedIn: true,
    },
    motorcycles: {
      motorcycles: [],
    },
    reservations: {
      reservation: [],
      reservationsFetched: false,
    },
  },
}; // Added closing curly brace here

const store = createStore(reducer, initialState, applyMiddleware(thunk));

describe('<Reservations />', () => {
  it('displays the correct message when there are no reservations', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Reservations />
          </MemoryRouter>
        </Provider>,
      );
    });

    expect(screen.getByText('You have no reservations')).toBeInTheDocument();
  });
});
