import api from "../configs/axios";

const loginAPI = async (values) => {
  try {
    const res = await api.post("/auth/Login", values);
    return res;
  } catch (error) {
    return error.response.data;
  }
};

const refreshTokenAPI = (tokens) => api.post("/auth/RefreshToken", tokens);

const authAPIS = {
  loginAPI,
  refreshTokenAPI,
};

export default authAPIS;
