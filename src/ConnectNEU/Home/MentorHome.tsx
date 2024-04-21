import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";
import Review from "../Reviews";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../Reviews/client";
import { setReview } from "../Reviews/reducer";

function MentorHome() {
	const dispatch = useDispatch();
	//const review = useSelector((state: any) => state.reviews.review);
	//const reviews = useSelector((state: any) => state.reviews.reviews);
	const { currentUser } = useSelector((state: any) => state.user);
	const [reviews, setReviews] = useState<any[]>([]);
	const [review, setReview] = useState<any>({
		user: currentUser,
		company: { _id: 0 },
	});

	const addNewReview = async () => {
		await client.createReview(review.user._id, review.company._id, review);
		setReviews([...reviews, review]);
	};

	useEffect(() => {
		const fetchCompanyReviews = async () => {
			let newReviews = [] as any[];
			for await (const company of currentUser.companies) {
				const revs = await client.fetchCompanyReviews(company._id);
				for (const r of revs) {
					newReviews = [...newReviews, await client.findReviewById(r)];
				}
			}
			setReviews([...reviews, ...newReviews]);
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
							onChange={(e) => {
								setReview({ ...review, title: e.target.value });
							}}
						/>
						<span className="dropdown mx-2">
							<button
								id="companies-dropdown"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Select A Company
							</button>
							<ul
								className="dropdown-menu"
								aria-labelledby="companies-dropdown">
								{currentUser.companies.map((company: any, index: any) => {
									return (
										<li
											key={index}
											className={
												review.company._id === company._id
													? "dropdown-item .active"
													: "dropdown-item"
											}>
											<label
												onClick={() =>
													setReview({ ...review, company: company })
												}>
												{company.companyName}
											</label>
										</li>
									);
								})}
							</ul>
						</span>
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
						return <Review key={r._id} review={r} blur={false} />;
					})}
			</div>
		</div>
	);
}
export default MentorHome;
