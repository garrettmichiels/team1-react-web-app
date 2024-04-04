import { FaStar } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";

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
			{sampleReviews.map((review, index) => {
				return (
					<div className="card blurred shadow-sm m-3" key={index}>
						<span className="d-flex">
							<h5 className="card-title">{review.company}</h5>
							<span className="d-flex mb-2 mx-2">
								{[...Array(5)].map((item, index) => {
									return (
										<div className="stars">
											<FaStar
												color={
													index < review.rating || index === review.rating
														? "rgb(230, 230, 0)"
														: "rgb(192,192,192)"
												}
											/>
										</div>
									);
								})}
							</span>
						</span>
						<div className="card-body">
							<Link to={""}>{review.user}</Link>
							<p>{review.text}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default AnonymousHome;
