import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Delete from '../components/pages/delete';

const mockMotorcyclesReducer = () => ({
  motorcycles: [
    { id: 1, name: 'Motorcycle 1' },
    { id: 2, name: 'Motorcycle 2' },
  ],
});

const mockSessionsReducer = () => ({
  loggedIn: true,
});

const store = configureStore({
  reducer: {
    motorcycles: mockMotorcyclesReducer,
    sessions: mockSessionsReducer,
  },
});

// Mock the useSelector function
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Delete component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback({
      state: {
        motorcycles: {
          motorcycles: [
            { id: 1, name: 'Motorcycle 1' },
            { id: 2, name: 'Motorcycle 2' },
          ],
        },
        sessions: {
          loggedIn: true, // Add this to match the shape of your actual state
        },
      },
    }));
  });

  it('renders the component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Delete />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('List of Items')).toBeInTheDocument();
  });
});
