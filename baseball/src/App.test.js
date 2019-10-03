import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  rtl.render(<App />, div);
  rtl.unmountComponentAtNode(div);
});
