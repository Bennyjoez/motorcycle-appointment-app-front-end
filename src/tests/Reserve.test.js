import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Reservations from '../components/pages/reserve';

jest.mock('axios');

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Reservations Component', () => {
  it('renders without errors when logged in', () => {
    useSelector.mockReturnValue({
      motorcycles: [],
      sessions: {
        loggedIn: true,
      },
    });
    useDispatch.mockReturnValue(jest.fn());

    const { getByText } = render(
      <Router>
        <Reservations />
      </Router>,
    );

    expect(getByText('HIRE A MOTOCYCLE')).toBeInTheDocument();
    expect(getByText('Select a motorcycle')).toBeInTheDocument();
    expect(getByText('Select a city')).toBeInTheDocument();
    expect(getByText('Select a status')).toBeInTheDocument();
  });

  it('handles reservation creation', async () => {
    useSelector.mockReturnValue({
      motorcycles: [{ id: 1, name: 'Motorcycle 1' }],
      sessions: {
        loggedIn: true,
        user: {
          id: 123,
        },
      },
    });
    useDispatch.mockReturnValue(jest.fn());

    render(
      <Router>
        <Reservations />
      </Router>,
    );

    // Fill out the reservation form
    fireEvent.change(screen.getByTestId('motorcycle-drop-down'), { target: { value: '1' } });
    fireEvent.change(screen.getByTestId('city-dropdown'), { target: { value: 'Lagos' } });
    fireEvent.change(screen.getByTestId('status-dropdown'), { target: { value: 'Confirmed' } });
    fireEvent.change(screen.getByTestId('date-picker'), { target: { value: '2023-09-01' } });

    // Submit the form
    fireEvent.click(screen.getByText('Book Now'));

    // Assert that the reservation is created successfully
    await waitFor(() => {
      expect(screen.getByText('Reservation has been created successfully!')).toBeInTheDocument();
    });
  });
});
