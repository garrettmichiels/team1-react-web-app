import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});
const USERS_API = "http://localhost:4000/api/users";

export interface User { _id: string; username: string; password: string;
  firstName: string, lastName: string, role: string; major: string,
  following: [String],
  coops: [String],};
  
  export interface Company { _id: string;
    companyName: string, companyId: string, id:String};
  
      
export const registerUser = async (user: any) => {
  const response = await axiosWithCredentials.post(
    "http://localhost:4000/api/users/register",
    user
  );
  return response.data;
};

export const loginUser = async (user: any) => {
  console.log("logingi person ", user)
  const response = await axiosWithCredentials.post(
    `${USERS_API}/login`,
    user
  );
  return response.data;
};


// export const signin = async (credentials: User) => {
//   const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
//   return response.data;
// };

export const deleteCompany = async (company: any) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/${company._id}`);
  return response.data;
};

export const deleteFollower = async (user: any, follower: any) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/${user._id}/followers/${follower._id}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  console.log("in find U");
  const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
  return response.data;
};

export const profile = async () => {
  
  const response = await axiosWithCredentials.post(
    `${USERS_API}/profile`
  );
  console.log(response.data)

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

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `http://localhost:4000/api/users/${user._id}`,
    user
  );
  return response.data;
};
