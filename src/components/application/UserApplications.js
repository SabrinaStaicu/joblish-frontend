import React, {useState, useEffect} from 'react';
import NavBar from "../main/NavBar";
import Footer from '../main/Footer'
import ApplicationsService from "../../service/ApplicationsService";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import Modal from 'react-modal';

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
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const cancelApplication = (id) => {
        ApplicationsService.cancelApplication(id).then(r => console.log(r.data));
        closeModal();
    }

    useEffect(() => {
        ApplicationsService.getAllByUserId(3).then(res => {setApplications(res.data)})
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
                                        <IconButton aria-label="delete" onClick={openModal}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                    >

                                            <div className="modal-dialog modal-confirm">
                                                <div className="modal-content">
                                                    <div className="modal-header justify-content-center">
                                                        <div className="icon-box">
                                                            <i className="material-icons">&#xE5CD;</i>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body text-center">
                                                        <h4>Warning!</h4>
                                                        <p>Are you sure you want to withdraw your application. Once you confirm, you can't go back.</p>
                                                        <Button variant="contained" color="primary" style={{margin: "10px"}} onClick={() => cancelApplication(application.id)}>Yes
                                                        </Button>
                                                        <Button onClick={closeModal} variant="contained" color="secondary">No</Button>
                                                    </div>
                                                </div>
                                            </div>
                                    </Modal>

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