import AnonymousHome from "./AnonymousHome";
import MenteeHome from "./MenteeHome";
import MentorHome from "./MentorHome";

function Home() {
	const loggedIn = true;
	const isMentor = true;
	const isMentee = false;
	if (loggedIn && isMentor) {
		return <MentorHome />;
	} else if (loggedIn && isMentee) {
		return <MenteeHome />;
	} else {
		return <AnonymousHome />;
	}
}
export default Home;
