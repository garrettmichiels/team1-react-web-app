import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});
const USERS_API = "http://localhost:4000/api/users";
export const registerUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/register",
    user
  );
  return response.data;
};

export const loginUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/logout`,
    user
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/profile`
  );
  return response.data;
};

export const logout = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/logout`
  );
  return response.data;
};

export const signup = async (user : any) => {
  const response = await axios.post(`${USERS_API}/signup`, user);
  return response.data;
};
