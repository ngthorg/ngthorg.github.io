/**
 * @flow
 */
import React from 'react';
import ReactDom from 'react-dom';

function Root() {
  return (
    <div>
      <p>HelloWorld!</p>
    </div>
  );
}

ReactDom.render(<Root />, document.getElementById('root'));
