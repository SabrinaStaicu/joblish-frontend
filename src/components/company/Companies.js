import React, {useState, useEffect} from 'react';
import NavBar from "../navigation/NavBar";
import CompanyCard from "./CompanyCard";
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

            <div className="container-fluid mt-5 mb-3">
                <br/>
                <div className="row" style={{width:"100%", margin:"auto"}}>
                    <div className="div-style-13">
                        { companies.length > 0 ? (companies.map(
                                company => <CompanyCard company={company}/>
                            )): (<div style={{margin:"auto"}}><h3>None of the companies are listing jobs.</h3></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;