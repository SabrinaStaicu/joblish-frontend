import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import UserPageContent from './UserPageContent';
import JobService from "../../service/JobService";
import JobCard from "../job/JobCard";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Modal from 'react-modal';
import UserService from "../../service/UserService";
import AuthService from "../../service/AuthService";
import EditUserPreferences from './EditUserPreferences';
import JobPreferences from './JobPreferences';
import {modalStyling} from "../../util/ModalStyling";
import {useEditStyles} from "../../styling/UserDtailsStyle";

export default function UserDetails() {
    const [savedJobs, setSavedJobs] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState({});
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });
    const openToWork1 = user.jobPreferences?.openToWork

    useEffect(() => {
        JobService.getSavedJobs(AuthService.getCurrentUser().id).then(res => setSavedJobs(res.data));
    }, [])

    useEffect(() => {
        UserService.getUserById(AuthService.getCurrentUser().id).then(res => setUser(res.data));
    }, [])

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const editClasses = useEditStyles();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setEdit(false);
    }

    const editHandler = () => {
        if (edit === true) {
            setEdit(false)
            return;
        }
        setEdit(true)
    }

    return (
        <>
            <Card className="user-card">
                <img className="user-profile-picture" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} alt="user's personal avatar" />
                <br/>
                <Card.Body>
                    <Card.Text style={{textAlign: 'center'}}>
                        <h5>{user.firstName} {user.lastName}</h5>
                        {user.country} {user.city} <br />
                        <div className="card-style-1">
                            <div className="card-style-2">
                                <section className="card-section-1">
                                    {openToWork1 ? (<a className=".open-to-work-section-1" onClick={openModal}>
                                        <EditOutlinedIcon onClick={openModal} className="classes-root" />
                                        <h3 className="open-to-work-section-h3">Open to work</h3>
                                        <p className="open-to-work-section-p1">Junior Developer · Marketing Specialist · System Administrator </p>
                                        <p className="open-to-work-section-p2">see all details</p>
                                    </a>):(<a onClick={openModal} className="open-to-work-section-a"><EditOutlinedIcon onClick={openModal} className="classes-root" /><h3 class="open-to-work-section-h3">Not open to work!</h3></a>)}
                                </section>
                            </div>
                        </div>
                    </Card.Text>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={modalStyling}
                    >
                        {edit ?
                            <EditUserPreferences editClasses={editClasses}
                                                 editHandler={editHandler} state={state} closeModal={closeModal}
                                                 user={user} handleChange={handleChange}/>
                            :
                            <JobPreferences closeModal={closeModal} user={user} editHandler={editHandler} state/>
                        }
                    </Modal>
                    <UserPageContent />
                </Card.Body>
                <div className="div-style-10"><h5>Jobs saved to favorites:</h5></div>

                <div className="div-style-11">
                    {
                        savedJobs.length > 0 ? (
                            savedJobs.map(
                                job =>  <JobCard picture={job.company.logo} job={job} />)
                        ) : (<p>You did not save any jobs to favorites.</p>)
                    }
                </div>
            </Card>
        </>
    )
}