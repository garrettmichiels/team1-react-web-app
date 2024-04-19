import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Search from "./Search";
import Login from "./Account/Login";
import Profile from "./Account/Profile";
import Listing from "./Listing";
import { Provider } from "react-redux";
import store from "./store";
import CurrentUser from "./Users/CurrentUser";
import { HashRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Account from "./Account";

export default function ConnectNEU() {
	return (
	<HashRouter>
		<Navigation />
			<Routes>
				<Route path="/" element={<Navigate to="Home" />}></Route>
				<Route path="Home" element={<Home />}></Route>
				<Route path="Search/:query/*" element={<Search />}></Route>
				<Route path="/Account/*" element={<Account />} />
				<Route path="Profile/:id/*" element={<Profile />}></Route>
				<Route path="Details/:did" element={<Listing />}></Route>
			</Routes>
			</HashRouter>

);
}
