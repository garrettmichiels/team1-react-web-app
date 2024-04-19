import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

export default function Review({
	review,
	blur,
}: {
	review: any;
	blur: boolean;
}) {
	return (
		<div className="card shadow-sm m-3">
			<span className="fp-card-header d-flex">
				<h5 className="card-title mx-2 pt-2">{review.company}</h5>
				<span className="d-flex mb-2 mx-2 p-2">
					{[...Array(5)].map((_item, index) => {
						return (
							<div className="stars">
								<FaStar
									color={
										index <= review.rating
											? "rgb(230, 230, 0)"
											: "rgb(192,192,192)"
									}
								/>
							</div>
						);
					})}
				</span>
			</span>
			<div className={blur ? "blurred card-body" : "card-body"}>
				<Link className="fp-user-link" to={""}>
					{review.user}
				</Link>
				<hr />
				<p>{review.text}</p>
			</div>
		</div>
	);
}
