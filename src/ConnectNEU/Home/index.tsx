import { useEffect, useState } from "react";
import AnonymousHome from "./AnonymousHome";
import MenteeHome from "./MenteeHome";
import MentorHome from "./MentorHome";
import { useDispatch, useSelector } from "react-redux";
import * as userClient from "../Users/Client";
import { setCurrentUser } from "../Users/reducer";

function Home() {
	const { currentUser } = useSelector((state: any) => state.user);

	if (currentUser === null) {
		return (
			<div className="container py-2">
				<h2>
					Welcome to ConnectNEU, Connect With Your Northeastern Community!
				</h2>
				<AnonymousHome />
			</div>
		);
	}
	if (currentUser.role === "MENTEE") {
		return (
			<div className="container py-2">
				<h2>
					Welcome to ConnectNEU, {currentUser.firstName}, Connect With Your
					Northeastern Community!
				</h2>
				<MenteeHome />
			</div>
		);
	} else if (currentUser.role === "MENTOR") {
		return (
			<div className="container py-2">
				<h2>
					Welcome to ConnectNEU, {currentUser.firstName}, Connect With Your
					Northeastern Community!
				</h2>
				<MentorHome />
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
