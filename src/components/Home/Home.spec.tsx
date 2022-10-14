import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { renderWithProviders } from '../../util/test-utils';
import Home from './Home';

describe('Home Tests', () => {
  beforeEach(() => {
    renderWithProviders(
      <Home />,
    );
  });
  test('renders input', () => {
    const btn = screen.getByTestId('address');
    expect(btn).toBeInTheDocument();
  });
  test('renders Map', () => {
    const btn = screen.getByTestId('map');
    expect(btn).toBeInTheDocument();
  });
});
