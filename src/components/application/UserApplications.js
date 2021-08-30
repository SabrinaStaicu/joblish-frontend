import React, {useState, useEffect} from 'react';
import NavBar from "../main/NavBar";
import Footer from '../main/Footer'
import ApplicationsService from "../../service/ApplicationsService";

const UserApplications = () => {
    // const [applications, setApplications] = useState([{
    //     company: "Codecool",
    //     jobTitle: "Cobol developer",
    //     category: "Education",
    //     type: "Full-time",
    //     status: "Denied",
    //     date: "12/05/2021",
    //     location: "Bucharest",
    //     picture: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/589/original/codecool-logo-symbol.png"
    // }, {
    //     company: "Codecool",
    //     jobTitle: "Mentor",
    //     category: "Education",
    //     type: "Full-time",
    //     status: "Not seen",
    //     date: "11/05/2021",
    //     location: "Bucharest",
    //     picture: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/589/original/codecool-logo-symbol.png"
    // }, {
    //     company: "Codecool",
    //     jobTitle: "Python developer",
    //     category: "Education",
    //     type: "Part-time",
    //     status: "Accepted",
    //     date: "14/05/2021",
    //     location: "Bucharest",
    //     picture: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/589/original/codecool-logo-symbol.png"
    //     }])
    const [applications, setApplications] = useState([])

    useEffect(() => {
        ApplicationsService.getAllByUserId(3).then(res => {
            setApplications(res.data)
            console.log(res.data)
        })
    }, [])
    
    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobsTop">
                <h1 style={{color:"white"}}>Current job applications</h1>
            </div>
            <div className="container mt-5 mb-3">
                <br/>
                <div className="row">
                    {
                        applications.map(
                            application =>  <div className="col-md-4">
                                <div className="card p-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon"><img src={application.job.company.logo} height="45px" width="45px" alt = "logo"/></div>
                                            <div className="ms-2 c-details">
                                                <h6 className="mb-0">{application.job.company.name}</h6> <span>{application.job.date}</span>
                                            </div>
                                        </div>
                                        <div className="badge"><span>{application.job.category}</span></div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="heading">{application.job.title}<br/>{application.job.city}</h3>
                                        <p>{application.job.jobType}</p>
                                        <span>{application.status}</span>
                                        <div className="mt-5">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "50%"}}
                                                     aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="mt-3"><span className="text1">32 Applied <span className="text2">of 50 capacity</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default UserApplications;