import React from 'react';
import ReactDOM from 'react-dom';
import { FilmsApp } from './components/films/FilmsApp';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <FilmsApp />
  </React.StrictMode>,
  document.getElementById('root')
);


