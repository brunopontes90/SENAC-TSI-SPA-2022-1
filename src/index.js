import React from 'react';
import ReactDOM from 'react-dom';
import HomeBrocker from './HomeBrocker';
import Curriculo from './Curriculo';
import Crypto from './Cryptomoedas';
import Contador from './Reducer';

ReactDOM.render(
  <React.StrictMode>
   <Contador />
  </React.StrictMode>,
  document.getElementById('root')
);