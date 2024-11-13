import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './msalInstance'; // Import msalInstance from msalInstance.js
import EmailSender from './EmailSender';

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <div className='App'>
        <h1>Outlook Email Sender</h1>
        <EmailSender />
      </div>
    </MsalProvider>
  );
}

export default App;
