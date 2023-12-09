import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';

test('renders navigation links in Navbar component', () => {
  const { getByAltText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  // Check if the HOME link is rendered
  const homeLink = getByAltText('HOME');
  expect(homeLink).toBeInTheDocument();

  // Check if the Plan Tennis link is rendered
  const playLink = getByAltText('Plan Tennis');
  expect(playLink).toBeInTheDocument();

  // Check if the Contact link is rendered
  const contactLink = getByAltText('Contact');
  expect(contactLink).toBeInTheDocument();
});
