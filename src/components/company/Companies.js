import React, {useState, useEffect} from 'react';
import NavBar from "../main/NavBar";
import CompanyCard from "./CompanyCard";
import Footer from '../main/Footer'
import CompanyService from "../../service/CompanyService";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        CompanyService.getAllCompanies().then(res => setCompanies(res.data))
    }, [])

    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobsTop">
                <h1 style={{color:"white"}}>Companies with job listings</h1>
            </div>
            <div style={{display:"flex", flexDirection:"row",flexWrap: "wrap"}}>
                {
                    companies.map(
                        company => <CompanyCard company={company}/>
                    )
                }
            </div>
        </div>
    );
};

export default Companies;