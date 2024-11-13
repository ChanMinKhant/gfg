import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';

const EmailSender = () => {
  const { instance } = useMsal();
  const [emailData, setEmailData] = useState({
    to: 'sayagyi226@gmail.com',
    subject: 'hi',
    body: 'ni haou',
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    try {
      const loginResponse = await instance.loginPopup(loginRequest);
      console.log(loginResponse);
      const accessToken = loginResponse.accessToken;

      const emailPayload = {
        message: {
          subject: emailData.subject,
          body: {
            contentType: 'Text',
            content: emailData.body,
          },
          toRecipients: [
            {
              emailAddress: {
                address: emailData.to,
              },
            },
          ],
        },
        saveToSentItems: 'true',
      };

      const response = await fetch(
        'https://graph.microsoft.com/v1.0/me/sendMail',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailPayload),
        }
      );

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        console.error('Error sending email:', await response.json());
      }
    } catch (error) {
      console.error('Authentication or email sending error:', error);
    }
  };

  return (
    <div>
      <h2>Send an Email</h2>
      <input
        type='email'
        name='to'
        placeholder="Recipient's Email"
        value={emailData.to}
        onChange={handleChange}
      />
      <input
        type='text'
        name='subject'
        placeholder='Subject'
        value={emailData.subject}
        onChange={handleChange}
      />
      <textarea
        name='body'
        placeholder='Email Body'
        value={emailData.body}
        onChange={handleChange}
      />
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailSender;
