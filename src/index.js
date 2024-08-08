import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from './firebase/config';
import { FirebaseContext } from './store/Context';
import Comtext from './store/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Comtext>
      <App />
    </Comtext>
  </FirebaseContext.Provider>
);