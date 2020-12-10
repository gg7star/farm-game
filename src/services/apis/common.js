import {fetch} from './fetch';
import {restApiSettings} from '../../config/api';
import * as localStorage from './local_storage';
import axios from 'axios';

export const getLocalToken = async () => {
  return await localStorage.getItem('userInfo');
};

export const setLocalToken = async (userInfo) => {
  return await localStorage.setItem('userInfo', userInfo);
};

const getUrl = function (path, params = {}) {
  // const url = new URL(`${restApiSettings.baseURL}${path}`);
  // for (let [key, value] of Object.entries(params)) {
  //   if (value) {
  //     url.searchParams.append(String(key), String(value));
  //   }
  // }
  // return url.toString();
  var url = `${restApiSettings.baseURL}${path}`;
  for (var i = 0; i < params.length; i++) {
    var item = params[i];
    const delimiter = i === 0 ? '?' : '&';
    url = `${url}${delimiter}${String(item.key)}=${String(item.value)}`;
  }
  return url;
};

export const query = async function (path, options = {}, useToken = true) {
  if (!options.headers) {
    options.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }
  options.headers = options.headers || {};
  var userInfo = null;
  if (useToken) {
    userInfo = await getLocalToken();
  }
  const token = userInfo && userInfo.token;
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsIm1haWxfYWRkcmVzcyI6ImFyYWlAdW5saW1pdGVkLmNvLmpwIiwiZXhwIjoxNjA3NDM2MDM3LCJvcmlnX2lhdCI6MTYwNzM0OTYzN30.keouQhTSS8AHyKoRpqsaaWOqzSSTNTamkmE199PqOAU';
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  const url = getUrl(path, options.searchParams || {});
  // const fetch = await getFetch(options);
  // const response = await fetch(url, options);
  const request = {
    method: options.method ? options.method : 'GET',
    url: url,
    headers: {...options.headers},
    data: options.data,
  };

  const response = await fetch(request);

  if (response.status >= 200 && response.status < 300) {
    if (options && options.responseType === 'blob') {
      return response;
    }
    return response.data;
  }
  return null;
  // try {
  //   const exception = response.exception;
  //   return Promise.reject(
  //     new Error(exception ? exception.error : response.status),
  //   );
  // } catch (error) {
  //   console.log(error);
  //   throw new Error(`HTTP status ${response.status} is not OK`);
  // }
};

export const jsonQuery = async function (path, method, data, useToken = true) {
  return await query(
    path,
    {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // body: JSON.stringify(data),
      data,
    },
    useToken,
  );
};

export const fileQuery = function (path, method, data) {
  var headers = [];
  const userInfo = getLocalToken();
  const token = userInfo && userInfo.token;
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const url = getUrl(path);
  return axios.post(url, data, {headers: {...headers}})
    .then((response) => {
      // get data
      return response.data;
    })
    // add url field
    .then((res) => {
      return res;
    });
};

export const generateParameters = (paramArray = []) => {
  if (paramArray.length > 0) return '';
  var res = '?';
  for (var i = 0; i < paramArray.length; i++) {
    var item = paramArray[i];
    res = res + `&${item.name}=${item.value}`;
  }
  return res;
};

export const generatePagenationParameters = (params) => {
  var res = {};
  Object.keys(params).map((key) => {
    const value = params[key];
    if (value) {
      res[key] = value;
    }
  });
  return res;
};
