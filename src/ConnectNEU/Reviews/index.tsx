import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";

export default function Review({ review }: { review: any }) {
	return (
		<div key={review._id} className="card shadow-sm m-3">
			<span className="fp-card-header d-flex">
				<Link
					className="fp-company-link"
					to={`/Search/${review.company.companyName}`}>
					<h5 className="fp-company-link card-title mx-2 pt-2">
						{review.company.companyName} - {review.title}
					</h5>
				</Link>
				<span className="d-flex mb-2 mx-2 p-2">
					{[...Array(5)].map((_item, index) => {
						return (
							<div key={index} className="stars">
								<FaStar
									color={
										index < review.stars
											? "rgb(230, 230, 0)"
											: "rgb(192,192,192)"
									}
								/>
							</div>
						);
					})}
				</span>
			</span>
			<div className={"card-body"}>
				<Link className="fp-user-link" to={`/Profile/${review.user.id}`}>
					{review.user.firstName} {review.user.lastName}
				</Link>
				<hr />
				<p>{review.description}</p>
			</div>
		</div>
	);
}
