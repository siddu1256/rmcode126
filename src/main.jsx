import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import RegisterPopup from './regpopup.jsx';
import SigninPop from './signinpopup.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1006724784762-f9mqhoj9h60osqil5hq8bt8fks9r6qbf.apps.googleusercontent.com">
    <App/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)