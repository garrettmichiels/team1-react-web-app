import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Search from "./Search";
import Login from "./Account/Login";
import Profile from "./Account/Profile";
import Listing from "./Listing";
import { HashRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Account from "./Account";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./Search/Details";

export default function ConnectNEU() {
	return (
		<HashRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigate to="Home" />}></Route>
				<Route path="Home" element={<Home />}></Route>
				<Route path="Search/:query/*" element={<Search />}></Route>
				<Route path="/Account/*" element={<Account />} />
				<Route path="Profile/:id" element={<Profile />}></Route>
				<Route path="Details/:did" element={<Details />}></Route>
			</Routes>
		</HashRouter>
	);
}
