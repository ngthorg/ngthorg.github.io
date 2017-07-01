/**
 * @flow
 */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Work from './Containers/Work';
import Lab from './Containers/Lab';
import About from './Containers/About';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" component={Work} />
        <Route path="/lab" component={Lab} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
