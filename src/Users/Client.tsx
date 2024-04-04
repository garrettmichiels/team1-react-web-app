import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const registerUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/users/register`,
    user
  );
  return response.data;
};

export const loginUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/users/login`,
    user
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/users/profile`
  );
  return response.data;
};

export const logout = async () => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/users/logout`
  );
  return response.data;
};

export const like = async () => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/like/:companyId`
  );
  return response.data;
};