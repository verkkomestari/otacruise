import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// linkit otsikkofontin hakua varten

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      href='https://fonts.gstatic.com'
      crossOrigin='true'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Mochiy+Pop+One'
      rel='stylesheet'
    ></link>
    <link
      href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;900&display=swap'
      rel='stylesheet'
    ></link>
    <App />
  </div>
);
