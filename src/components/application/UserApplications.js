import React, {useState, useEffect} from 'react';
import NavBar from "../main/NavBar";
import ApplicationsService from "../../service/ApplicationsService";
import ApplicationCard from "./ApplicationCard";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

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
        ApplicationsService.getAllByUserId(279).then(res => {setApplications(res.data)})
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
                        applications.length > 0 ? (
                        applications.map(
                            application => <ApplicationCard 
                                                application={application}
                                                modalIsOpen={modalIsOpen}
                                                closeModal={closeModal}
                                                customStyles={customStyles}
                                                openModal={openModal}
                                                cancelApplication={cancelApplication}
                                            />
                        )) : (<div style={{textAlign: "center"}}><h3>You do not have any current applications.</h3></div>)
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default UserApplications;