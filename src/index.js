import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';

import './index.css';

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
