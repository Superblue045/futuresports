import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For custom Jest matchers

import Competitions from './component/Competitions';

test('renders Competition Details and Entry Form', () => {
  render(<Competitions />);

  // Check if Competition Details are rendered
  expect(screen.getByText(/Competition Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Upcoming Competitions/i)).toBeInTheDocument();

  // Check if Entry Form is rendered
  expect(screen.getByText(/Entry Form/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Player Name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
  expect(screen.getByText(/Submit Entry/i)).toBeInTheDocument();
});

test('handles form submission with valid data', () => {
  render(<Competitions />);

  // Mock the console.log method to check if it's called
  const originalLog = global.console.log;
  global.console.log = jest.fn();

  // Fill in the form with valid data
  fireEvent.change(screen.getByLabelText(/Player Name:/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone Number:/i), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByLabelText(/Message:/i), { target: { value: 'Hello, this is a test message.' } });

  // Submit the form
  fireEvent.click(screen.getByText(/Submit Entry/i));

  // Check if console.log is called with the correct data

  expect(global.console.log).toHaveBeenCalledWith('Form submitted:', {
    playerName: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '1234567890',
    message: 'Hello, this is a test message.',
  });

  // Restore the original console.log method
  global.console.log = originalLog;
});

test('handles form submission with invalid data', () => {
  render(<Competitions />);

  // Mock the console.log method to check if it's called
  const originalLog = global.console.log;
  global.console.log = jest.fn();

  // Submit the form without filling in any data
  fireEvent.click(screen.getByText(/Submit Entry/i));

  // Check if console.log is called with the error message
  expect(global.console.log).toHaveBeenCalledWith('Form has errors. Please fix them.');

  // Restore the original console.log method
  global.console.log = originalLog;
});
