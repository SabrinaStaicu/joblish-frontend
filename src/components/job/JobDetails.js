import React, {useEffect, useState, useRef} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "../main/NavBar";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Modal from 'react-modal';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import CheckButton from "react-validation/build/button";
import JobService from "../../service/JobService";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import ApplicationsService from "../../service/ApplicationsService";
import {required, validEmail, nameValidation} from "../../util/Validations";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {modalStyling} from "../../util/ModalStyling";

Modal.setAppElement('#root');
const JobDetails = () => {
    const form = useRef();
    const checkBtn = useRef();
    const location = useLocation();
    const job = location.state.job;
    const history = useHistory();
    const [applicantName, setApplicantName] = useState();
    const [applicantEmail, setApplicantEmail] = useState();
    const [notes, setNotes] = useState();
    const [jobsByCurrentCompany, setJobsByCurrentCompany] = useState([])
    const [applicationsForThisJob, setApplicationsForThisJob] = useState([])
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [userHasAppliedToJob, setUserHasAppliedToJob] = useState(false);
    const [jobIsSaved, setJobIsSaved] = useState(false);

    const getApplicantName = (event) => {
        setApplicantName(event.target.value)
    }

    const getApplicantEmail = (event) => {
        setApplicantEmail(event.target.value)
    }

    const getNotes = (event) => {
        setNotes(event.target.value)
    }

    useEffect(() => {
        JobService.getAllByCompanyId(job.company.id).then(res => setJobsByCurrentCompany(res.data))
        ApplicationsService.getAllByJobId(job.id).then(res => setApplicationsForThisJob(res.data))
        ApplicationsService.userHasAlreadyApplied(3, job.title, job.company.name).then(res => setUserHasAppliedToJob(res.data))
        JobService.jobIsSaved(3, job.id).then(res => setJobIsSaved(res.data))
    }, [])

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const addJobToFavorites = () => {
        JobService.addJobToFavorites(3, job.id).then(res => setJobIsSaved(true));
    }

    const removeFromFavorites = () => {
        JobService.removeJobFromFavorites(3, job.id).then(res => setJobIsSaved(false));
    }

    const submitForm = e => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            ApplicationsService.addApplication(notes, 3, job.id).then(
                res => {
                    setMessage(`Thank you for applying for a ${job.title} position at ${job.company.name}.`);
                    setSuccessful(true);
                    setTimeout(() => {
                        history.push("/user-applications");
                    }, 200);
                }, error => {
                    setMessage(`Something went from with your application.`);
                    setSuccessful(false);
                }
            )
        }
    }

    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} userHasApplied={userHasAppliedToJob} applyBtn={openModal} />
            <div className="jobDetails">
                <h1>{job.title}</h1>
                <h3>{job.company.name}</h3>
                <p>{job.date}</p>
                {userHasAppliedToJob ? <div className="apply-disabled" ><h6 style={{margin:"auto"}}>ALLREADY APPLIED</h6></div> : <div onClick={openModal} className="apply"><SendIcon /><h5 className="btn-title">Apply</h5></div>}

            </div>
            <div style={{display:"flex"}}>
            <div style={{flex:"2"}}><div className="jobInfo">
                <div>
                    <h5>Location : <p style={{display:"inline-block"}}>{job.country}, {job.city}</p></h5>
                    <h5>Department : <p style={{display:"inline-block"}}>{job.category}</p></h5>
                </div>
                <div>
                    <h5>Job Type : <p style={{display:"inline-block"}}>{(job.jobType).replace("_", " ")}</p></h5>
                    <h5>Salary : <span style={{display:"inline-block"}}>${job.salary}</span></h5>
                </div>
            </div>
            <div className="jobDescription" dangerouslySetInnerHTML={{ __html:job.description}}/>
            </div>
                <div style={{flex:"0.8", marginTop:"25px"}}>

                    <div className="ab">
                        <img src={job.company.logo ? job.company.logo : "https://img.ejobs.ro/img/webcore/no-logo.jpg"}/>
                        <span>{job.company_name}</span>
                        <span style={{color:"grey"}}>{jobsByCurrentCompany.length} active job(s)</span>
                    </div>
                    <div className="cd">
                        <div className="topSection">
                            <div>
                            <img className="checkimg" src="https://img.ejobs.ro/img/webcore/farafrica/security-neutral.svg" />
                            <h5 className="checkText">APPLY WITHOUT FEAR!</h5>
                            </div>
                        </div>
                        <div className="middleSection">
                            <ul style={{listStyle:"none"}}>
                                <li>
                                    <i><CheckCircleIcon className="greenCheck" /></i>
                                    <span style={{fontWeight:"500"}}>Verified ad</span>
                                    <p style={{transform:"translateX(-18px)", marginTop:"20px"}} className="Saftey__description">The text of this ad has been verified by the Joblish team to eliminate possible errors or discriminatory content.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ef">
                        <div className="topSection-ef">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${applicationsForThisJob.length * 2}%`}}
                                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="mt-3"><span className="text1">{applicationsForThisJob.length} Applied <span className="text2">of 50 capacity</span></span>
                            </div>
                        </div>
                        <div className="middleSection-ef">
                        <span style={{fontWeight:"500"}}>Save it to favorites!</span>
                        <span>{jobIsSaved ? <Button  onClick={removeFromFavorites}><FavoriteIcon fontSize="large" /></Button> : <Button onClick={addJobToFavorites}><FavoriteBorderIcon /></Button>}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyling}
            >
                <div style={{textAlign: "right"}}>
                    <Button variant="contained" color="secondary" onClick={closeModal}>X</Button>
                </div>
                {message && (
                    <div className="form-group">
                        <div
                            className={
                                successful ? "alert alert-success" : "alert alert-danger"
                            }
                            role="alert"
                        >
                            {message}
                        </div>
                    </div>
                )}
                <Form noValidate onSubmit={submitForm} ref={form}>
                        <br/>
                        <label>Full name</label>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter full name"
                            onChange={getApplicantName}
                            value={applicantName}
                            validations={[required, nameValidation]}
                        />
                        <br/>
                        <label>Email address</label>
                        <Input
                            className="form-control"
                            type="email"
                            placeholder="Enter email"
                            onChange={getApplicantEmail}
                            validations={[required, validEmail]}
                            value={applicantEmail}
                        />
                        <br/>
                        <label>Notes</label>
                        <Input
                            className = "form-control"
                            type="text"
                            placeholder="Note for the recruiter"
                            onChange={getNotes}
                            value={notes}
                            validations={[required]}
                        />
                        <br/>
                    <div style={{textAlign: "center"}}>
                        <Button variant="contained" color="primary" type="submit">Apply</Button>
                    </div>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </Modal>
        </div>
    );
};

export default JobDetails;