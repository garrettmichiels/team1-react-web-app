import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as museClient from "../TheMuse/client";
import * as userClient from "../Users/Client";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface Jobs {
	name: string;
	locations: { name: string }[];
	categories: { name: string }[];
	levels: { name: string }[];
	refs: { landing_page: string };
	company: { id: number; name: string };
}

export default function Search() {
	const { query } = useParams<{ query: string }>();
	const [results, setResults] = useState<any[]>();
	const navigate = useNavigate();
	const { currentUser } = useSelector((state: any) => state.user);

	const getJobsFromCompany = async () => {
		if (query) {
			console.log(query);
			const resultsFromQuery = await museClient.getJobsFromCompany(query);
			setResults(resultsFromQuery.results);
			console.log(resultsFromQuery);
		}
	};

	const addCompany = async (company: any) => {
		try {
			console.log("company", company);
			const updatedUser = {
				...currentUser,
				companies: [...currentUser.companies, company._id]}
				
			console.log("Add company", currentUser._id, company._id);
			await userClient.updateUser(updatedUser);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getJobsFromCompany();
	}, [query]);

	return (
		<div className="container">
			{/* <h1 className="m-2">Search Results</h1> */}
			{results && results.length === 0 && (
				<div className="text-center mt-3">
					<h2>No Results For That Search</h2>
				</div>
			)}

			{results && results.length > 0 && (
				<>
					{currentUser && (
						<span className="float-end">
							<button
								className="btn btn-success m-2"
								onClick={() => addCompany(results[0].company)}>
								Add Company
							</button>
						</span>
					)}
					<h1 className="card-title mx-2 pt-2">Search Results</h1>
				</>
			)}

			{results &&
				results.map((result: any) => (
					<div className="card m-3" key={result.id}>
						<span className="d-flex">
							<h5 className="card-title mx-2 pt-2">
								{result.company.name + " - " + result.name}
							</h5>
							<span className="d-flex mb-2 mx-2 p-2"></span>
						</span>
						<div className="card-body">
							<div>
								{result.locations[0] && "Location: " + result.locations[0].name}
							</div>
							<div>
								{result.categories[0] &&
									"Category: " + result.categories[0].name}
							</div>
							<div>{result.levels[0] && "Level: " + result.levels[0].name}</div>
							<div className="float-end">
								<a
									className="btn btn-primary mx-2"
									href={result.refs.landing_page}>
									Apply
								</a>
								<Link
									className="btn btn-primary mx-2"
									to={`/Details/${result.id}`}
									state={{ result }}>
									Details
								</Link>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}
