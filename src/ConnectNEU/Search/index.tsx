import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "../TheMuse/client";

interface Jobs {
	locations: { name: string }[];
	categories: { name: string }[];
	levels: { name: string }[];
	refs: { landing_page: string };
	company: { id: number; name: string };
}

export default function Search() {

	const { query } = useParams<{ query: string }>();
	const [results, setResults] = useState<any[]>();
  
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
		<h1>Search Results</h1>
		{!results && <p>No Results</p>}
	 {results && results.map((result: Jobs) => {
			{JSON.stringify(result.locations)}
			{JSON.stringify(result.categories)}
			{JSON.stringify(result.levels)}

		// <div className="card m-3">
		// 	<span className="d-flex">
		// 		{/* <h5 className="card-title mx-2 pt-2">{result.company.name}</h5> */}
		// 		<span className="d-flex mb-2 mx-2 p-2">
		// 			{/* {result.name} */}
		// 			{JSON.stringify(result.locations)}
		// 		</span>
		// 	</span>
		// </div>
		})} 
	
		</>


	);
}
