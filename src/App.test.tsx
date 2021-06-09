import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/hours/i)).toBeInTheDocument();
  });
})
