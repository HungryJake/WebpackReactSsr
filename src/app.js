/* eslint-disable */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';

function render() {
  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('app')
  );
}
render(Main);

if (module.hot) {
  module.hot.accept('./components/Main/Main.jsx', () => {
    render(require('./components/Main/Main.jsx').default);
  });
}
