
//import { AppContainer } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { createMuiTheme } from "@material-ui/core/styles"
import App from './App';
import history from 'customHistory'

import 'style/app.scss';
const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
    useNextVariants: true
  },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>,
      document.getElementById('app-container'));
  registerServiceWorker()


