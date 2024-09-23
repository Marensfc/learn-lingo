import axios from 'axios';

export const exchangeRefreshTokenForAnIdToken = async refreshToken => {
  const result = await axios.post(
    'https://securetoken.googleapis.com/v1/token?key=AIzaSyAeXxA0XBIr73amkhCQYUcfu8Tm5c3zDs4',
    {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return result.data;
};

export const getUserData = async IdToken => {
  const result = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAeXxA0XBIr73amkhCQYUcfu8Tm5c3zDs4',
    { idToken: IdToken }
  );
  return result.data.users[0];
};
