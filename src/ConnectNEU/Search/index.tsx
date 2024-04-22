import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "../TheMuse/client";
import { Link } from "react-router-dom";

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
	const getJobsFromCompany = async () => {
		if (query) {
			console.log(query);
			const resultsFromQuery = await client.getJobsFromCompany(query);
			setResults(resultsFromQuery.results);
			console.log(resultsFromQuery);
		}
	};
  
	useEffect(() => {
		getJobsFromCompany();
	}, [query]);
	return(
		<>
		<h1 className="m-2">Search Results</h1>
		{results && results.length === 0 && <div className="text-center"><h2>No Results</h2></div>}
	 {results && results.map((result: any) => (
			
		<div className="card m-3" key={result.id}>
			<span className="d-flex">
				<h5 className="card-title mx-2 pt-2">{result.company.name + " - " + result.name}</h5>
				<span className="d-flex mb-2 mx-2 p-2">
	

				</span>
			</span>
			<div className="card-body">
				<div>{result.locations[0] && "Location: " + result.locations[0].name}</div>
				<div>{result.categories[0] && "Category: " + result.categories[0].name}</div>
				<div>{result.levels[0] && "Level: " + result.levels[0].name}</div>
				<div className="float-end">
					<a className="btn btn-primary mx-2" href={result.refs.landing_page}>Apply</a>
					<Link className="btn btn-primary mx-2" to={`/Details/${result.id}`} state={{result}}>Details</Link>
					</div>
				</div>
		</div>
			
		))} 
		</>
	);
}

