import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from "./components/StateProvider"
import reducer, {initialState} from './reducer'
import { SnackbarProvider, useSnackbar } from 'notistack';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <SnackbarProvider maxSnack={3}>
    <App />
    </SnackbarProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
