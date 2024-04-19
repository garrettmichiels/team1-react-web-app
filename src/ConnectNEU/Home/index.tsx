import AnonymousHome from "./AnonymousHome";
import MenteeHome from "./MenteeHome";
import MentorHome from "./MentorHome";

function Home() {
	const loggedIn = true;
	const isMentor = false;
	const isMentee = true;
	if (loggedIn && isMentor) {
		return (
			<div className="container py-2">
				<MentorHome />
			</div>
		);
	} else if (loggedIn && isMentee) {
		return (
			<div className="container py-2">
				<MenteeHome />
			</div>
		);
	} else {
		return (
			<div className="container py-2">
				<AnonymousHome />
			</div>
		);
	}
}
export default Home;
