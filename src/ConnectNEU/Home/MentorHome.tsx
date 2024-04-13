import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";
import Review from "../Review";

function MentorHome() {
	const [reviews, setReviews] = useState<any[]>([]);
	const [review, setReview] = useState({
		company: "Question",
		rating: 0,
		text: "Review text",
	});
	return (
		<div className="p-3">
			<div className="card shadow-sm">
				<div className="card-body">
					<h5 className="card-title">Submit a Company Review</h5>
					<span className="d-flex">
						<input
							className="flex-grow-1 mb-2 form-control"
							type="text"
							placeholder="Company Name"
							onChange={(e) => {
								setReview({ ...review, company: e.target.value });
							}}
						/>
						<span className="rating mb-2 mx-2">
							{[...Array(5)].map((item, index) => {
								const givenRating = index + 1;
								return (
									<label>
										<input
											style={{ display: "none" }}
											type="radio"
											value={givenRating}
											onClick={() => {
												setReview({ ...review, rating: givenRating });
											}}
										/>
										<div className="stars">
											<FaStar
												color={
													givenRating < review.rating ||
													givenRating === review.rating
														? "rgb(230, 230, 0)"
														: "rgb(192,192,192)"
												}
											/>
										</div>
									</label>
								);
							})}
						</span>
						<button type="button" className="submit-button mb-2">
							Submit Review
						</button>
					</span>
					<div className="d-flex flex-fill">
						<textarea
							className="flex-grow-1 form-control"
							placeholder="Write a review here"></textarea>
					</div>
				</div>
			</div>
			<div className="my-3">
				<h2>Reviews Where You've Worked</h2>
				<ul>
					{reviews.map((r) => {
						return (
							<li>
								<Review review={r} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default MentorHome;
