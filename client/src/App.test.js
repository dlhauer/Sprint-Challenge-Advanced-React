import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('PlayerList renders', () => {
  const {queryAllByTestId} = render(<App />);
  queryAllByTestId('player-list');
})

test('PlayerCards render', () => {
  const {queryAllByTestId} = render(<App />);
  queryAllByTestId('player-card');
})

