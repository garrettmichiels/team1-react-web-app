import { useEffect, useState } from "react";
import AnonymousHome from "./AnonymousHome";
import MenteeHome from "./MenteeHome";
import MentorHome from "./MentorHome";
import { useDispatch, useSelector } from "react-redux";
import * as userClient from "../Users/Client";
import { setCurrentUser } from "../Users/reducer";

function Home() {
	const dispatch = useDispatch();

	const { currentUser } = useSelector((state: any) => state.user);

	const fetchCurrentUser = async () => {
		console.log("before current user fetch");
		console.log(currentUser);
		const account = await userClient.profile();
		dispatch(setCurrentUser(account));
		console.log("after current user fetch");
		console.log(account);
	};

	useEffect(() => {
		fetchCurrentUser();
	}, []);

	if (!currentUser) {
		console.log("anon user, showing anon home");
		return (
			<div className="container py-2">
				<AnonymousHome />
			</div>
		);
	} else if (currentUser.state === "MENTEE") {
		console.log("mentee user, showing mentee home");
		return (
			<div className="container py-2">
				<MenteeHome />
			</div>
		);
	} else if (currentUser.state === "MENTOR") {
		console.log("mentor user, showing mentor home");
		return (
			<div className="container py-2">
				<MentorHome />
			</div>
		);
	} else {
		return <></>;
	}
}
export default Home;
