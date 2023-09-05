import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddMotorcycle from '../components/pages/add-motorcycle';

jest.mock('../components/navbar.js', () => () => (
  <div data-testid="navbar">Navbar</div>
));
jest.mock('../components/add_motorcycle_form.js', () => () => (
  <div data-testid="add-motorcycle-form">AddMotorcycleForm</div>
));

describe('AddMotorcycle', () => {
  it('should render the Navbar and AddMotorcycleForm components', () => {
    render(<AddMotorcycle />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('add-motorcycle-form')).toBeInTheDocument();
  });
});
