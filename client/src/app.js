import React from 'react';
import ReactDOM from 'react-dom';
import CountryContainer from './containers/CharacterContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <CountryContainer />,
    document.getElementById('app')
  );
};
