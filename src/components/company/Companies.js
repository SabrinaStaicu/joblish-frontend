import React, {useState} from 'react';
import NavBar from "../main/NavBar";
import CompanyCard from "./CompanyCard";

const Companies = () => {
    const [companies, setCompanies] = useState([{
        name: "Microsoft",
        category: "IT",
        jobs: [
            {
                title: "Mentor",
                job_type: "full-time",
                category: "Developer"
            }, {
                title: "Back-end Engineer",
                job_type: "full-time",
                category: "Developer"
            }
        ]
    }, {
        name: "Adobe",
        category: "IT",
        jobs: [
            {
                title: "DevOps Engineer",
                job_type: "full-time",
                category: "Developer"
            }, {
                title: "QA Analyst",
                job_type: "full-time",
                category: "QA"
            }
        ]
    }])
    return (
        <div>
            <NavBar />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", margin: "10px"}}>
                <h3>Companies with job listings</h3>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <div className="jobsSection">
                    {
                        companies.map(
                            company => <CompanyCard company={company}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Companies;