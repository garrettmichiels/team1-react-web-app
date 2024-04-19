import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./ConnectNEU/Account/Login";
import Home from "./ConnectNEU/Home";
import Navigation from "./ConnectNEU/Navigation";
import Account from "./ConnectNEU/Account";
import CurrentUser from "./ConnectNEU/Users/CurrentUser";
import { Provider } from "react-redux";
import store from "./ConnectNEU/store";
import Profile from "./ConnectNEU/Account/Profile";
import ConnectNEU from "./ConnectNEU";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
<CurrentUser>
	<ConnectNEU/>
			{/* <HashRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Navigate to="/Home" />} />
					<Route path="/Home/" element={<Home />} />
					<Route path="/Login/*" element={<Login />} />
					<Route path="/Account/*" element={<Account />} />
					<Route path="/Account/Profile/:userId" element={<Profile />} />
					<Route path="/Account/Profile" element={<Profile />} />
					<Route path="/Details/*" element={<h1>Details</h1>} />
					<Route path="/Search/*" element={<h1>Search</h1>} />
				</Routes>
			</HashRouter> */}
			</CurrentUser>
	</Provider>
		</div>
		
	);
}

export default App;
