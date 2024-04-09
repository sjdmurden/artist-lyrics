import axios from 'axios';

const api = axios.create({
  baseURL: 'https://accounts.spotify.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

async function fetchAccessToken() {
  const clientId = '02dc0530a3d4412f95aebccc831606c5';
  const clientSecret = '475eb21290d74606ba3d504b06c0439f';
  const tokenEndpoint = '/api/token';

  try {
    const response = await api.post(tokenEndpoint, null, {
      params: {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      },
    });

    const accessToken = response.data.access_token;
    console.log(accessToken, '<-- access token api');
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
}

export default fetchAccessToken;
