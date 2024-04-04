import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";

function MentorHome() {
	const [review, setReview] = useState({
		company: "Question",
		rating: 0,
		text: "Review text",
	});
	const sampleQuestions = [
		{
			title: "Question 1 Title",
			user: "User 1",
			text: "This is some sample text, a sample question for a sample mentor.",
		},
		{
			title: "Question 2 Title",
			user: "User 2",
			text: "Question text 2",
		},
		{
			title: "Question 3 Title",
			user: "User 3",
			text: "Question text 3",
		},
		{
			title: "Question 4 Title",
			user: "User 4",
			text: "Question text 4",
		},
		{
			title: "Question 5 Title",
			user: "User 5",
			text: "Question text 5",
		},
	];
	return (
		<div className="p-3">
			<div className="card shadow-sm">
				<div className="card-body">
					<h5 className="card-title">Submit a Company Review</h5>
					<span className="d-flex">
						<input
							className="flex-grow-1 mb-2 form-control"
							type="text"
							placeholder="Question"
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
				<h2>Questions From Your Mentees</h2>
				{sampleQuestions.map((question, index) => {
					return (
						<div className="card shadow-sm m-3" key={index}>
							<span className="card-body">
								<h4>{question.title}</h4>
								<Link to={""}>{question.user}</Link>
								<p>{question.text}</p>
								<span className="float-end">
									<button type="button" className="submit-button">
										Answer Question
									</button>
								</span>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default MentorHome;
