export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
  makeRequest,
  postFile,
};

const baseURL = 'http://localhost:3000';

async function get(subUri, params) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(makeRequest(subUri, params)),
  };
  return await fetch(makeRequest(subUri, params), requestOptions)
    .then(handleResponse)
    .catch((err) => console.log(err));
}

async function post(subUri, params, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(makeRequest(subUri, params)),
    },
    body: JSON.stringify(body),
  };
  return await fetch(makeRequest(subUri, params), requestOptions).then(
    handleResponse
  );
}

async function postFile(subUri, params, body) {
  const requestOptions = {
    method: "POST",
    // mode: 'no-cors',
    body: body,
  };
  return await fetch(makeRequest(subUri, params), requestOptions).then(
    handleResponse
  );
}

function put(subUri, params, body) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(makeRequest(subUri, params)),
    },
    body: JSON.stringify(body),
  };
  return fetch(makeRequest(subUri, params), requestOptions).then(
    handleResponse
  );
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url, params) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  };
  return fetch(makeRequest(url, params), requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url) {
  var token = JSON.parse(localStorage.getItem("token"));
  return { Authorization: `Bearer ${token}` };
}

function makeRequest(subUri, params) {
  var url = `${baseURL}/${subUri}?`;
  // var url = `${configURL.host}/${subUri}?`
  var Uri = "";
  if (params) {
    Object.keys(params).forEach((key) => {
      Uri += key + "=" + params[key] + "&";
    });
  }
  return url + Uri;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    return data;
  });
}
