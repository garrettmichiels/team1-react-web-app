import { Provider } from "react-redux";
import store from "./store";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Search from "./Search";
import Login from "./Users/Login";
import Profile from "./Profile";
import Listing from "./Listing";
export default function ConnectNEU() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Navigate to="Home" />}></Route>
				<Route path="Home" element={<Home />}></Route>
				<Route path="Search/:query/*" element={<Search />}></Route>
				<Route path="Login" element={<Login />}></Route>
				<Route path="Profile/:id/*" element={<Profile />}></Route>
				<Route path="Details/:did" element={<Listing />}></Route>
			</Routes>
		</Provider>
	);
}
