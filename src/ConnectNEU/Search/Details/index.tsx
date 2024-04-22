import { useLocation } from 'react-router-dom';
import './index.css';
import { useSelector } from 'react-redux';
import * as client from '../../Users/Client';
export default function Details() {
    const {state} = useLocation();
    console.log("State", state);
    const job = state.result;
    const { currentUser } = useSelector((state: any) => state.user);
    
    const saveJob = async (jobId: string) => {
        try {
            await client.addJobToUser(currentUser.id, jobId);
      
          } catch (err) {
            console.log(err);
          }
    }

    return (
        <>
            <div style={{fontSize: "40px"}}>{job.company.name}
            <button className="btn btn-success float-end m-2" onClick={() => saveJob(job.id)}>Save Job</button></div>

            <div className="card" key={job.id}>
                <div className="d-block">
			<span className="float-end">
					<a className="btn btn-primary mx-2 mt-1 float-end" target="_blank" href={job.refs.landing_page}>Apply</a>
				
			</span>
            <h3 className="card-title mx-2 pt-2">{job.name}</h3>

            </div>
            
			<div className="card-body">
            
				<div>{job.locations[0] && "Location: " + job.locations[0].name}</div>
				<div>{job.categories[0] && "Category: " + job.categories[0].name}</div>
				<div>{job.levels[0] && "Level: " + job.levels[0].name}</div>

                <div dangerouslySetInnerHTML={{__html: job.contents.replaceAll("<br>", "").replaceAll("<b>","<h2>").replaceAll("</b>","</h2>")}}></div>
		</div>
        </div>
        </>
    );
}