import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./ConnectNEU/Account/Login";
import Home from "./ConnectNEU/Home";
import Navigation from "./ConnectNEU/Navigation";
import Account from "./ConnectNEU/Account";
import Search from "./ConnectNEU/Search";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Navigate to="/Home" />} />
					<Route path="/Home/" element={<Home />} />
					<Route path="/Login/*" element={<Login />} />
					<Route path="/Account/*" element={<Account />} />
					<Route path="/Details/*" element={<h1>Details</h1>} />
					<Route path="/Search/:query/*" element={<Search />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
