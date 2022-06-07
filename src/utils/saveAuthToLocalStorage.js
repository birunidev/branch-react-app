function saveAuthToLocalStorage(token, refreshToken, user) {
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
  localStorage.setItem("user", JSON.stringify(user));
}
export default saveAuthToLocalStorage;
