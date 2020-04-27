import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import 'tailwindcss/dist/base.css'
import "./assets/styles.css"

/* TODO:
All translation files are loaded asynchronously to your React application. 
In this example, while we wait for the translation files, we render just nothing. 
Tto provide a fallback component, for example a loading indicator, use the fallback property 
of the Suspense component.
*/
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
