import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import UserPageContent from './UserPageContent';
import JobService from "../../service/JobService";
import JobCard from "../job/JobCard";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import {useForm} from "react-hook-form";
import UserService from "../../service/UserService";
import {useHistory} from "react-router-dom";
import AuthService from "../../service/AuthService";
import './userStyle.css';
import EditUser from './EditUser';
import JobPreferences from './JobPreferences';

export default function UserDetails() {

    const [savedJobs, setSavedJobs] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [updatedUser, setUser] = useState({});
    const openToWork1 = updatedUser.jobPreferences?.openToWork
    const history = useHistory()

    useEffect(() => {
        JobService.getSavedJobs(AuthService.getCurrentUser().id).then(res => {
            setSavedJobs(res.data)
        });

    }, [])

    useEffect(() => {
        UserService.getUserById(AuthService.getCurrentUser().id).then(res => setUser(res.data));
    }, [])

    const user = updatedUser;


    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const { register, handleSubmit, formState: {errors} } = useForm({
        // defaultValues: preloadedValues
    });

    const [value, setValue] = React.useState('');

  const handleChangeRadio = (event) => {
        setValue(event.target.value);
  };


    const userModalStyling = {
        content: {
            borderRadius:"14px",
            width:"40%",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }

    const useEditStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            marginBottom : 20,
            width: 100,
          },
        },
      }));




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
                    <Card.Text style={{ textAlign: 'center' }}>
                        <h5>{user.firstName} {user.lastName}</h5>
                        {user.country} {user.city} <br />
                        <div class="card-style-1">
                            <div class="card-style-2">
                                <section class="card-section-1">
                                    {openToWork1 ? (<a class=".open-to-work-section-1" onClick={openModal}>
                                        <EditOutlinedIcon onClick={openModal} className="classes-root" />
                                        <h3 class="open-to-work-section-h3">Open to work</h3>
                                        <p class="open-to-work-section-p1">Junior Developer · Marketing Specialist · System Administrator </p>
                                        <p class="open-to-work-section-p2">see all details</p>
                                    </a>):(<a onClick={openModal} class="open-to-work-section-a"><EditOutlinedIcon onClick={openModal} className="classes-root" /><h3 class="open-to-work-section-h3">Not open to work!</h3></a>)}
                                </section>
                            </div>
                        </div>
                        {/* <h5 style={{margin: "10px"}}>{user.lookingForJob ? "OPEN TO WORK" : "NOT LOOKING FOR A JOB"}</h5> */}
                    </Card.Text>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={userModalStyling}
                    >
                        {edit ? 
                        <EditUser editClasses={editClasses} handleSubmit={handleSubmit}
                         editHandler={editHandler} state={state} setUser={setUser} closeModal={closeModal}
                          user={user} handleChange={handleChange} register={register} errors={errors} 
                          value={value} handleChangeRadio={handleChangeRadio}/> 
                          :
                        <JobPreferences closeModal={closeModal} user={user} editHandler={editHandler} state/>
                        }
                    </Modal>
                    <UserPageContent />
                </Card.Body>
                <div class="div-style-10"><h5>Jobs saved to favorites:</h5></div>

                <div class="div-style-11">
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