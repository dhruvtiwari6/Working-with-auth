import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-l3xbxkfjclrrx8bj.us.auth0.com"
    clientId="ATkk2X70n6wkZIOLAiRHwSIHtgeZhSsg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
