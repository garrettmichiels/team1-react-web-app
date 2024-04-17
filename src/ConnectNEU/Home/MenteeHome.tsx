import Review from "../Reviews";

function MenteeHome() {
	const reviews = [
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
		<>
			<h2>Reviews From Your Mentors</h2>
			{reviews.map((r) => {
				return <Review review={r} blur={false} />;
			})}
		</>
	);
}
export default MenteeHome;
