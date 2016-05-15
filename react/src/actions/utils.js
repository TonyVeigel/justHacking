import fetch from 'isomorphic-fetch';

export const hostName = __DEVELOPMENT__ ? 'http://localhost:8080/' : '/';
const cookie = __DEVELOPMENT__ ? 'include' : 'same-origin';

export function fetchCookie(url, httpRequest = {}){
  httpRequest.credentials = cookie;
  httpRequest.headers = {...httpRequest.headers, "Accept": "application/json"};
  return fetch(hostName + url,
    httpRequest
  )
}
