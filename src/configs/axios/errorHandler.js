import { toast } from "react-toastify";
import { authAPI } from "../../api";
import setAuthorizationHeader from "./setAuthorizationHeader";

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      const originalRequest = error.config;
      if (error.response.status === 500)
        message = "Something went terribly wrong";
      else if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const access_token = localStorage["token"]
          ? JSON.parse(localStorage["token"])
          : null;
        const refresh_token = localStorage["refresh_token"]
          ? JSON.parse(localStorage["refresh_token"])
          : null;
        return authAPI
          .refreshTokenAPI({
            Token: access_token,
            RefreshToken: refresh_token,
          })
          .then((res) => {
            if (res.data.success) {
              setAuthorizationHeader(res.data.token);
              localStorage.setItem("token", JSON.stringify("token"));
              originalRequest.headers.authorization = `Bearer ${res.data.token}`;
            } else {
              localStorage.removeItem("token");
              localStorage.removeItem("refresh_token");

              window.location.href = "/login";
            }
          });
      } else message = error.response.data.message;

      if (typeof message === "string") toast.error(message);

      return Promise.reject(error);
    }
  }
}
