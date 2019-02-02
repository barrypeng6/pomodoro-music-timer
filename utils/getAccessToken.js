import fetch from 'isomorphic-unfetch';
import { Auth } from '@kkbox/kkbox-js-sdk';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { APP_ID, APP_SECRET },
} = getConfig();

export default async (code) => {
  if (code) {
    const codeRes = await fetch('https://account.kkbox.com/oauth2/token', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${code}&client_id=${APP_ID}&client_secret=${APP_SECRET}`,
    });

    const { access_token: privateToken, error } = await codeRes.json();
    if (error) {
      const auth = new Auth(APP_ID, APP_SECRET);
      const authResponse = await auth.clientCredentialsFlow.fetchAccessToken();
      const { access_token: publicToken } = authResponse.data;
      return { publicToken, error };
    }
    return { privateToken };
  }
  const auth = new Auth(APP_ID, APP_SECRET);
  const authResponse = await auth.clientCredentialsFlow.fetchAccessToken();
  const { access_token: publicToken } = authResponse.data;
  return { publicToken };
};
