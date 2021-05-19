const localStorageKey = "__auth_provider_token__";

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}
function removeToken() {
  return window.localStorage.clear();
}

function login({ username, password }) {
  if (
    username === process.env.REACT_APP_USER_NAME &&
    password === process.env.REACT_APP_PASS_CODE
  ) {
    window.localStorage.setItem(
      localStorageKey,
      process.env.REACT_APP_AUTH_TOKEN
    );
    setTimeout(function () {
      removeToken();
    }, 15 * 60 * 1000);
    return true;
  } else {
    alert("Password or Username is wrong");
    return false;
  }
}

export { getToken, login, localStorageKey };
