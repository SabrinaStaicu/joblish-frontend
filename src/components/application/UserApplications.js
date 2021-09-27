import React, {useState, useEffect} from 'react';
import NavBar from "../navigation/NavBar";
import ApplicationsService from "../../service/ApplicationsService";
import ApplicationCard from "./ApplicationCard";
import {modalStyling} from "../../util/ModalStyling";
import AuthService from "../../service/AuthService";

const UserApplications = () => {
    const [applications, setApplications] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const cancelApplication = (id) => {
        ApplicationsService.cancelApplication(id).then(r => console.log(r.data));
        setApplications(applications.filter((item) => item.id !== id))
        closeModal();
    }

    useEffect(() => {
        ApplicationsService.getAllByUserId(AuthService.getCurrentUser().id).then(res => {setApplications(res.data)})
    }, [])

    const filterByStatus = event => {
        ApplicationsService.filterByStatus(AuthService.getCurrentUser().id, event.target.value).then(res => setApplications(res.data));
    }

    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobsTop">
                <h1 style={{color:"white"}}>Current job applications</h1>
            </div>
            <div className="div-style-14">
                <p>Filter by application status</p>
                <select className="form-select" aria-label="Default select example" style={{width: "200px"}} onChange={filterByStatus}>
                    <option value="Any_status">Any status</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Denied">Denied</option>
                    <option value="Not_seen">Not seen</option>
                </select>
            </div>

            <div className="container mt-5 mb-3">
                <br/>
                <div className="row">
                    {
                        applications.length > 0 ? (
                        applications.map(
                            application => <ApplicationCard 
                                                application={application}
                                                modalIsOpen={modalIsOpen}
                                                closeModal={closeModal}
                                                customStyles={modalStyling}
                                                openModal={openModal}
                                                cancelApplication={cancelApplication}
                                            />
                        )) : (<div style={{textAlign: "center"}}><h3>You do not have any current applications.</h3></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserApplications;