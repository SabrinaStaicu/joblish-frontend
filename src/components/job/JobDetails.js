import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "../main/NavBar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";
import Modal from 'react-modal';

import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {Form} from "react-bootstrap";

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

Modal.setAppElement('#root');


const JobDetails = () => {
    const location = useLocation();
    const job = location.state.job;
    const history = useHistory();
    const [applicantName, setApplicantName] = useState();
    const [applicantEmail, setApplicantEmail] = useState();

    const getApplicantName = (event) => {
        setApplicantName(event.target.value)
    }

    const getApplicantEmail = (event) => {
        setApplicantEmail(event.target.value)
    }

    useEffect(() => {
        console.log(job)
    })

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    const apply = () => {
        history.push(`/apply/${job.id}`)
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <NavBar color={"rgba(0, 0, 255, 0.534)"} />
            <div className="jobDetails">
                <h1>{job.title}</h1>
                <h3>{job.company_name}</h3>
                <p>{job.publication_date}</p>
            </div>
            <div style={{display:"flex"}}>
                <div style={{flex:"2"}}><div className="jobInfo">
                <div>
                    <h5>Location : <p style={{display:"inline-block"}}>{job.candidate_required_location}</p></h5>
                    <h5>Department : <p style={{display:"inline-block"}}>{job.category}</p></h5>
                </div>
                <div>
                    <h5>Job Type : <p style={{display:"inline-block"}}>{job.job_type}</p></h5>
                    <h5>Salary : <span style={{display:"inline-block"}}>{job.salary}</span></h5>
                </div>
            </div>
            <div className="jobDescription" dangerouslySetInnerHTML={{ __html:job.description}}/>
            {/* <Button color="primary" variant="contained">Apply</Button> */}</div>
                <div style={{flex:"0.8", marginTop:"25px"}}>
                    <div className="ab">asd</div>
                    <div className="cd">asd</div>
                    <div className="ef">asd</div>
                </div>
            </div>
            <Button color="primary" variant="contained" onClick={openModal}>Apply</Button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" onChange={getApplicantName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={getApplicantEmail}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={apply}>
                        Apply
                    </Button>
                </Form>
            </Modal>
        </div>
    );
};

export default JobDetails;