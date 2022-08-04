import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Downloads from "./routes/Downloads";
import Policy from "./routes/Policy";
import ResponsiveAppBar from './components/ResponsiveAppBar';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#282c34;"
    },
    primary: {
      main: "#333333"
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <HashRouter>
    <ResponsiveAppBar/>
    <CssBaseline />
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="privacy_policy" element={<Policy />} />
    </Routes>
  </HashRouter>
  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
