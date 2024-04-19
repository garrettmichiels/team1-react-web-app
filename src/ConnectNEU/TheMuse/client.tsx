import axios from "axios";

const MUSE_API = "https://www.themuse.com/api/public";
const KEY = process.env.REACT_APP_MUSE_API_KEY;
// https://www.themuse.com/api/public/companies/:id
// ?company=Google&level=Entry%20Level&page=1

export const getJobsFromCompany = async (companyName: string, pageCount: number=1) => {
const response = await axios.get(
    `${MUSE_API}/jobs?company=${companyName}&page=${pageCount}`
);
return response.data;
};

export const getJobsFromCompanyWithLevel = async (companyName: string, level: string, pageCount: number=1) => {
const response = await axios.get(
    `${MUSE_API}/jobs?company=${companyName}&level=${level}&page=${pageCount}`
);
return response.data;
};

export const getCompany = async (companyId: string, pageCount: number=1) => {
const response = await axios.get(
    `${MUSE_API}companies?company=${companyId}&page=${pageCount}`
);
return response.data["results"];
};