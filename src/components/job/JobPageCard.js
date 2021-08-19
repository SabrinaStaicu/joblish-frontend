import React from 'react'

const JobPageCard = ({job}) => {
    console.log(job)
    return (
        <div className="jobsInfo">
            <div className="jobsLogo">Logo</div>
            <h2 style={{fontWeight:"400"}}>{job.title}</h2>
            <div className="jobInfoDown">
                <span style={{fontWeight:"500"}}>{job.company_name}</span>
                <span>{job.category}</span>
                <span>Salary</span>
            </div>
        </div>
    )
}

export default JobPageCard
