import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStateProvider} from "./services/globalStateService";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Here we bring in the global state provider service to allow for cross-component state!
// I like using react context and hooks voer Redux. Cuts down on the package size and makes for cleaner code.
ReactDOM.render(
  <React.StrictMode>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

