import React, {useState} from 'react';
import NavBar from "../main/NavBar";
import CompanyCard from "./CompanyCard";

const Companies = () => {
    const [companies, setCompanies] = useState([{
        name: "Codecool",
        category: "IT",
        jobs: [
            {
                title: "Mentor",
                type: "full-time",
            }, {
                title: "Back-end Engineer",
                type: "full-time"
            }
        ]

    }, {
        name: "Adobe",
        category: "IT",
        jobs: [
            {
                title: "DevOps Engineer",
                type: "full-time",
            }, {
                title: "QA Analyst",
                type: "full-time"
            }
        ]
    }])
    return (
        <div>
            <NavBar />
            <div>
                {
                    companies.map(
                        company => <CompanyCard />
                    )
                }
            </div>
        </div>
    );
};

export default Companies;