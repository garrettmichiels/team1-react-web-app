import "./index.css";
import Review from "../Reviews";
import { setReviews } from "../Reviews/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as client from "../Reviews/client";
function AnonymousHome() {
	const dispatch = useDispatch();

	const reviews = useSelector((state: any) => state.reviews.reviews);

	const fetchAnonReviews = async () => {
		const response = await client.fetchRecentReviews();
		dispatch(setReviews(response));
	};

	useEffect(() => {
		fetchAnonReviews();
	}, []);
	return (
		<div className="p-3">
			<h2>Sign In To View Recent Reviews</h2>
			{Array.isArray(reviews) &&
				reviews.map((r: any, index: any) => {
					return <Review key={index} review={r} blur={true} />;
				})}
		</div>
	);
}
export default AnonymousHome;
