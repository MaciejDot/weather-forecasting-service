import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';
import AppTestApi from '../AppTestApi';

export default function renderApp() {
  return AppTestApi(render(<App />).container);
}
