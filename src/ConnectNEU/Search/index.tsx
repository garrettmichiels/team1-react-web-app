import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "../TheMuse/client";
export default function Search() {
	const { query } = useParams<{ query: string }>();
	const navigate = useNavigate();
  
	const [results, setResults] = useState<any>([]);
  
	const getJobsFromCompany = async () => {
		if (query) {
			const results = await client.getJobsFromCompany(query);
			setResults(results);
		}
	  
	  
	};
  
	useEffect(() => {
		getJobsFromCompany();
	}, [query]);
	return(

		results.results.map((result: any) => {
		<div className="card shadow-sm m-3">
			<span className="d-flex">
				<h5 className="card-title mx-2 pt-2">{result.company.name}</h5>
				<span className="d-flex mb-2 mx-2 p-2">
					{result.name}
					{result.categories.name}
					{result.levels.name}
					{result.locations.name}
				</span>
			</span>
		</div>
		})


	);
}
