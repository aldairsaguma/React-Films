import React from 'react';
import ReactDOM from 'react-dom';
import { FilmsApp } from './components/FilmsApp';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './styles/styles.scss';

/** Valores de useContext **/
// const [darkMode, setDarkMode] = useState({
//     darkMode : false
// });

ReactDOM.render(
  <React.StrictMode>
      <FilmsApp />
  </React.StrictMode>,
  document.getElementById('root')
);


