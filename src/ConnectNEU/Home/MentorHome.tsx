import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";
import Review from "../Reviews";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../Reviews/client";
import { setReview } from "../Reviews/reducer";

function MentorHome() {
	//const dispatch = useDispatch();
	//const review = useSelector((state: any) => state.reviews.review);
	//const reviews = useSelector((state: any) => state.reviews.reviews);
	const { currentUser } = useSelector((state: any) => state.user);
	const [reviews, setReviews] = useState<any[]>([]);
	const baseReview = {
		user: currentUser,
		company: { _id: 0 },
		stars: 0,
		description: "",
		title: "",
	};
	const [review, setReview] = useState<any>(baseReview);

	const setReviewCompany = (e: any) => {
		if (e.target.value !== 0) {
			const company = currentUser.companies.find(
				(company: any) => company._id === e.target.value
			);
			setReview({
				...review,
				company: company,
			});
		}
	};

	const addNewReview = async () => {
		if (review.company._id !== 0) {
			await client.createReview(review.user._id, review.company._id, review);
			setReviews([review, ...reviews]);
			setReview(baseReview);
		}
	};

	useEffect(() => {
		const fetchCompanyReviews = async () => {
			let newReviews = [] as any[];
			for await (const company of currentUser.companies) {
				const revs = await client.fetchCompanyReviews(company._id);
				for (const r of revs) {
					const newRev = await client.findReviewById(r);
					if (newRev !== null) {
						newReviews = [newRev, ...newReviews];
					}
				}
			}
			setReviews(newReviews);
			console.log(newReviews);
		};
		fetchCompanyReviews();
	}, []);

	return (
		<div className="p-3">
			<div className="card shadow-sm">
				<div className="card-body">
					<h5 className="card-title">Submit a Company Review</h5>
					<span className="d-flex">
						<input
							className="flex-grow-1 mb-2 form-control"
							type="text"
							placeholder="Title"
							value={review.title}
							onChange={(e) => {
								setReview({ ...review, title: e.target.value });
							}}
						/>
						<select
							className="form-select mx-2 mb-2"
							id="companies-dropdown"
							value={review?.company?._id ?? 0}
							onChange={(e) => setReviewCompany(e)}>
							<option value={0}>Select A Company</option>
							{currentUser.companies.map((company: any, index: any) => {
								return (
									<option key={index} value={company._id}>
										{company.companyName}
									</option>
								);
							})}
						</select>
						<span className="rating mb-2 mx-2">
							{[...Array(5)].map((item, index) => {
								const givenRating = index;
								return (
									<label key={index}>
										<input
											style={{ display: "none" }}
											type="radio"
											value={givenRating}
											onClick={() => {
												setReview({ ...review, stars: givenRating + 1 });
											}}
										/>
										<div className="stars">
											<FaStar
												color={
													givenRating < review.stars
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
								addNewReview();
							}}>
							Submit Review
						</button>
					</span>
					<div className="d-flex flex-fill">
						<textarea
							className="flex-grow-1 form-control"
							placeholder="Write a review here"
							value={review.description}
							onChange={(e) => {
								setReview({ ...review, description: e.target.value });
							}}
						/>
					</div>
				</div>
			</div>
			<div className="my-3">
				<h2>Reviews Where You've Worked</h2>
				{reviews &&
					reviews.map((r: any, index: any) => {
						console.log("review is", r);
						return <Review key={index} review={r} />;
					})}
			</div>
		</div>
	);
}
export default MentorHome;
