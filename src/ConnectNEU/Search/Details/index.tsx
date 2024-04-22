import { useLocation } from 'react-router-dom';
export default function Details() {
    const {state} = useLocation();
    console.log("State", state);
    const job = state.result;
    return (
        <div>
            <h1>{job.name}</h1>
            <div className="card m-3" key={job.id}>
			<span className="d-flex">
				<h4 className="card-title mx-2 pt-2">{job.company.name}</h4>
			</span>
			<div className="card-body">
            <h5>{job.name}</h5>
				<div>{job.locations[0] && "Location: " + job.locations[0].name}</div>
				<div>{job.categories[0] && "Category: " + job.categories[0].name}</div>
				<div>{job.levels[0] && "Level: " + job.levels[0].name}</div>
				<div className="float-end">
					<a className="btn btn-primary mx-2" href={job.refs.landing_page}>Apply</a>
					
				</div>
		</div>
        </div>
        </div>
    );
}