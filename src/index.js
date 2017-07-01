/**
 * @flow
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

function Root() {
  return (
    <App />
  );
}

ReactDom.render(<Root />, document.getElementById('root'));
