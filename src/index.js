import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-y7b1lfas1o860suw.us.auth0.com"
    clientId="xNnimsawzPTZYH4wBDjfOeTXxvmJUHwY"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);

