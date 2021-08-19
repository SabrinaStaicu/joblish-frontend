import React, {useState} from 'react';
import NavBar from "../main/NavBar";
import CompanyCard from "./CompanyCard";

const Companies = () => {
    const [companies, setCompanies] = useState([{
        name: "Microsoft",
        category: "IT",
        picture: "https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg",
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
        name: "Oracle",
        category: "IT",
        picture: "data:image/png;base64,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",
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
    }, {
        name: "Zitec",
        picture: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397186633/363c45e59cde1baf56a03a59c8b1f9e5.png",
        category: "IT",
        jobs: [
            {
                title: "Front-end Engineer",
                job_type: "full-time",
                category: "Developer"
            }, {
                title: "IoT Engineer",
                job_type: "full-time",
                category: "Software Engineer"
            }
        ]
    }])
    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobsTop">
                <h1 style={{color:"white"}}>Companies with job listings</h1>
            </div>
                <div style={{display:"flex",flexWrap: "wrap"}}>
                    {
                        companies.map(
                            company => <CompanyCard picture={company.picture} company={company}/>
                        )
                    }
                </div>
        </div>
    );
};

export default Companies;