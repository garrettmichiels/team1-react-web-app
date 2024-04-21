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

export const fetchRecentReviews = async () => {
	const response = await axios.get("http://localhost:4000/api/reviews");
	return response.data;
};

export const fetchCompanyReviews = async (companyId: String) => {
	const response = await axios.get(`http://localhost:4000/api/reviews/companyReviews/${companyId}`);
	return response.data;
};

export const fetchUserReviews = async (userId: String) => {
	const response = await axios.get(`http://localhost:4000/api/reviews/userReviews/${userId}`);
	return response.data;
};

export const createReview = async (userId: String, companyId: String, review: any) => {
	const newReview = {...review, date: new Date().getDate}
	const response = await axios.post(
		`http://localhost:4000/api/reviews/${userId}/${companyId}`,
		review
	);
	return response.data;
};

export const updateReview = async (reviewId: string, review: any) => {
	const response = await axios.put(
		`http://localhost:4000/api/reviews/${reviewId}`,
		review
	);
	return response.data;
};

export const deleteReview = async (reviewId: string) => {
	const response = await axios.delete(
		`http://localhost:4000/api/reviews/${reviewId}`
	);
	return response.data;
};

export const findReviewById = async (reviewId: string) => {
	const response = await axios.get(
		`http://localhost:4000/api/reviews/${reviewId}`
	);
	return response.data;
}
