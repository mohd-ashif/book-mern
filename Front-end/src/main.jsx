import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import your main app component
import { SnackbarProvider } from 'notistack';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
