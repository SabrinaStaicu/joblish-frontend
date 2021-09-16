import React, {useEffect, useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import ApplicationsService from "../../service/ApplicationsService";

const ApplicationCard = ({application, modalIsOpen, closeModal, customStyles, openModal, cancelApplication}) => {
    const [applicationsForThisJob, setApplicationsForThisJob] = useState([])

    useEffect(() => {
        ApplicationsService.getAllByJobId(application.job.id).then(res => {setApplicationsForThisJob(res.data)})
    }, [])

    const getFormattedDate = date => {
        date = date.toString();
        return date.substring(0, 4) + "-" + date.substring(5,6) + "-" + date.substring(7);
    }

    return (
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"><img src={application.job.company.logo} height="45px" width="45px" alt = "logo"/></div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">{application.job.company.name}</h6> <span>{getFormattedDate(application.job.date)}</span>
                        </div>
                    </div>
                    <div className="badge"><span>{application.job.category}</span></div>
                    {
                        application.status === "Not_seen" && (
                            <IconButton aria-label="delete" onClick={openModal}>
                                <DeleteIcon />
                            </IconButton>
                        )
                    }

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
                    <p>{(application.job.jobType).replace("_", " ").toLowerCase()}</p>
                    <span>{(application.status).replace("_", " ")}</span>
                    <div className="mt-5">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${applicationsForThisJob.length * 2}%`}}
                                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mt-3"><span className="text1">{applicationsForThisJob.length} Applied <span className="text2">of 50 capacity</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationCard;