import axios from "axios";
import { Review } from "../Reviews/client";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});
const USERS_API = "http://localhost:4000/api/users";

export interface User { _id: string, id: string, username: string; password: string;
  firstName: string, lastName: string, number: string, email: string, dob:string, role: string; major: string,
  reviews: Review[],
  following: User[],
  companies: Company[]};
  
  export interface Company { _id: string;
    companyName: string, companyId: string, id:String};
  
      
export const registerUser = async (user: any) => {
  console.log("registering person ", user)
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

export const addCompany = async (userId: any, company: any) => {
  const companyId = company.companyId
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${userId}/companies/${companyId}`, company);
  return response.data;
}

export const deleteCompany = async (userId: any, companyId: any) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/companies/${companyId}`);
  return response.data;
};

export const deleteFollower = async (userId: any, followerId: any) => {
  console.log( `${USERS_API}/${userId}/followers/${followerId}`);
  console.log( userId, followerId);

  const response = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/followers/${followerId}`);
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
  console.log("editing user ", user._id, "to be ", user)
  const response = await axiosWithCredentials.put(
    `http://localhost:4000/api/users/${user._id}`,
    user
  );
  return response.data;
};

export const addFollower = async (userId: any, followerId: any) => {
  console.log( `${USERS_API}/${userId}/followers/${followerId}`);
  console.log( userId, followerId);

  const response = await axiosWithCredentials.put(
    `${USERS_API}/${userId}/followers/${followerId}`);
  return response.data;
};

export const addJobToUser = async (userId: any, jobId: any) => {
  console.log( `${USERS_API}/${userId}/jobs/${jobId}`);
  console.log( userId, jobId);

  const response = await axiosWithCredentials.put(
    `${USERS_API}/${userId}/jobs/${jobId}`);
  return response.data;
}