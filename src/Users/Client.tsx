import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const registerUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/register",
    user
  );
  return response.data;
};

export const loginUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/login",
    user
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/profile"
  );
  return response.data;
};

export const logout = async () => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/logout"
  );
  return response.data;
};