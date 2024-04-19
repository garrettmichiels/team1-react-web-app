import { Link, useNavigate } from "react-router-dom";
import * as Search from "../Search/index";
import { useState } from "react";
export default function Navigation() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();
	const navigateToSearch = () => {
		if (search) {
			navigate(`/ConnectNEU/Search/${search}`);
		}
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to={"/Home"} className="navbar-brand">
					ConnectNEU
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/Home" className="nav-link">
								Home
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link to={"/Profile"} className="nav-link">
								Profile
							</Link>
						</li> */}
						<li className="nav-item">
							<Link to={"/Account"} className="nav-link">
								Account
							</Link>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button className="btn btn-outline-success" type="submit" onClick={navigateToSearch}>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
