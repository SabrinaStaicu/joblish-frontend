import React, {useState, useEffect} from 'react';
import {Collapse} from "@material-ui/core";
import JobCard from "../job/JobCard";
import '../../styling/company.scss';
import JobService from "../../service/JobService";


const CompanyCard = ({company}) => {
	const [jobs, setJobs] = useState([]);
    const [showJobs, setShowJobs] = useState(false);

    const toggleJobs = () => {
        setShowJobs(!showJobs);
    }

	useEffect(() => {
		JobService.getAllByCompanyId(company.id).then(res => setJobs(res.data))
	}, [])

        return (
            <div style={{margin: "auto"}}>
                <article className="postcard light blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={company.logo} alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a className="postcard__title blue" href="#">{company.name}</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>{company.category}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{company.description}</div>
				{
					jobs.length > 0 && (
						<ul className="postcard__tagbox">
							<li className="tag__item play blue" onClick={toggleJobs}>
								<div style={{cursor:"pointer"}} ><i className="fas fa-play mr-2"></i>See Jobs</div>
							</li>
						</ul>
					)
				}
			</div>
		</article>
                <Collapse in={showJobs}>
                    <h4 style={{textAlign:"center"}}>Jobs from {company.name}</h4>
                    <div className="companiesJobsSection">
                    {
                        jobs.map(
                            job => <JobCard picture={company.logo} job={job}/>
                        )
                    }
                    </div>
                </Collapse>
            </div>
        );
};

export default CompanyCard;