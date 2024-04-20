import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";
import Review from "../Reviews";
import { useSelector } from "react-redux";

function MentorHome() {
	const review = useSelector((state: any) => state.reviews.reviews);
	const reviews = useSelector((state: any) => state.reviews.reviews);
	const { currentUser } = useSelector((state: any) => state.user);

	const fetchCompanyReviews = async () => {
		console.log(currentUser);
		if (currentUser) {
			console.log(currentUser.companies);
			let allReviews = [] as any[];
			for (const company of currentUser.companies) {
				allReviews = [...allReviews, ...company.reviews];
			}
		}
	};
	useEffect(() => {
		fetchCompanyReviews();
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
								//({ ...review, company: e.target.value });
							}}
						/>
						<span className="rating mb-2 mx-2">
							{[...Array(5)].map((item, index) => {
								const givenRating = index;
								return (
									<label>
										<input
											style={{ display: "none" }}
											type="radio"
											value={givenRating}
											onClick={() => {
												//({ ...review, rating: givenRating });
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
						<button
							type="button"
							className="submit-button mb-2"
							onClick={() => {
								//[...reviews, review];
							}}>
							Submit Review
						</button>
					</span>
					<div className="d-flex flex-fill">
						<textarea
							className="flex-grow-1 form-control"
							placeholder="Write a review here"
							onChange={(e) => {
								//({ ...review, text: e.target.value });
							}}
						/>
					</div>
				</div>
			</div>
			<div className="my-3">
				<h2>Reviews Where You've Worked</h2>
				{reviews.map((r: any, index: any) => {
					return <Review key={index} review={r} blur={false} />;
				})}
			</div>
		</div>
	);
}
export default MentorHome;
