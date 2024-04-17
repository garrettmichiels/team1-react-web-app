import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const REVIEW_API = `${BASE_API}/api/reviews`;
export interface Review { 
    _id: String,
    stars: Number,
    title: String,
    description: String,
    datePosted: Date,
    company: String,
    user: String,
};

