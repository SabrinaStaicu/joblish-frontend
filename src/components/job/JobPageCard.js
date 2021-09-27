import React from 'react'
import { useHistory } from 'react-router'

const JobPageCard = ({job}) => {

    const history = useHistory();
    
    const goToJob = () => {
        history.push({
            pathname: `/job/${job.id}`,
            state: {job: job}
        })
    }

    return (
        <div className="jobsInfo" onClick={goToJob}>
            <img className="jobsLogo" src={job.company.logo} alt="logo"/>
            <h2 style={{fontWeight:"400"}}>{job.title}</h2>
            <div className="jobInfoDown">
                <span style={{fontWeight:"500"}}>{job.company.name}</span>
                <span>{job.category}</span>
                <span>${job.salary}/month</span>
            </div>
        </div>
    )
}

export default JobPageCard
