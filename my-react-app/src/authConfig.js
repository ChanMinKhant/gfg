// authConfig.js
export const msalConfig = {
  auth: {
    clientId: '<Your clientId>', // Your application (client) ID from Azur
    authority: 'https://login.microsoftonline.com/<tenantID>', // Your tenant ID
    redirectUri: 'http://localhost:5173', // Or your app’s URL
  },
  cache: {
    cacheLocation: 'sessionStorage', // Options: 'localStorage' or 'sessionStorage'
    storeAuthStateInCookie: false, // Set to true for IE11 or Edge
  },
};

export const loginRequest = {
  scopes: ['Mail.Send'], // Scopes for sending email
};
