import { FaStar } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";
import Review from "../Reviews";

function AnonymousHome() {
	const sampleReviews = [
		{
			company: "Company Name 1",
			user: "User 1",
			rating: 2,
			text: "This is some sample text, a sample review for a sample company.",
		},
		{
			company: "Company Name 2",
			user: "User 2",
			rating: 5,
			text: "Review text 2",
		},
		{
			company: "Company Name 3",
			user: "User 3",
			rating: 3,
			text: "Review text 3",
		},
		{
			company: "Company Name 4",
			user: "User 4",
			rating: 1,
			text: "Review text 4",
		},
		{
			company: "Company Name 5",
			user: "User 5",
			rating: 0,
			text: "Review text 5",
		},
	];
	return (
		<div className="p-3">
			<h2>Sign In To View Recent Reviews</h2>
			{sampleReviews.map((review) => {
				return <Review review={review} blur={true} />;
			})}
		</div>
	);
}
export default AnonymousHome;
