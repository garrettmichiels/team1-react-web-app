import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Review from "../Reviews";
import * as client from "../Reviews/client";

function MenteeHome() {
	const { currentUser } = useSelector((state: any) => state.user);
	const [reviews, setReviews] = useState<any[]>([]);

	useEffect(() => {
		const fetchFollowingReviews = async () => {
			let newReviews = [] as any[];
			console.log("user is following", currentUser.following);
			for await (const user of currentUser.following) {
				const revs = await client.fetchUserReviews(user._id);
				console.log("user reviews", revs);
				for (const r of revs) {
					const newRev = await client.findReviewById(r);
					if (newRev !== null) {
						newReviews = [newRev, ...newReviews];
					}
				}
			}
			for await (const company of currentUser.companies) {
				const revs = await client.fetchCompanyReviews(company._id);
				console.log("company reviews", revs);
				for (const r of revs) {
					const newRev = await client.findReviewById(r);
					if (newRev !== null) {
						newReviews = [newRev, ...newReviews];
					}
				}
			}
			setReviews([...reviews, ...newReviews]);
		};
		fetchFollowingReviews();
	}, []);

	return (
		<>
			<h2>Reviews From Your Mentors & Followed Companies</h2>
			{reviews.map((r, index) => {
				return <Review key={index} review={r} blur={false} />;
			})}
		</>
	);
}
export default MenteeHome;
