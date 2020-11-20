import { jsonQuery, query, setLocalToken } from './common';

export async function signupWithAPI(data) {
  return await jsonQuery('/auth/register/', 'POST', data, false);
}

export async function loginWithAPI(data) {
  // console.log('===== loginWithAPI: data: ', data);
  const res = await jsonQuery('/auth/login/', 'POST', data, false);
  // console.log('===== loginWithAPI: res: ', res);
  await setLocalToken(JSON.stringify(res));
  return res;
}

export async function logoutWithAPI(data) {
  return await query('/auth/logout/', {method: 'POST'}, false);
}
