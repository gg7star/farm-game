import axios from 'axios';

export async function fetch(request) {
  console.log('===== request: ', request);
  return axios(request)
    .then((response) => {
      console.log('===== response: ', response);
      return response;
    })
    .catch((err) => {
      console.log('===== err: ', err);
      return {status: err.status, exception: err.data};
    });
}
