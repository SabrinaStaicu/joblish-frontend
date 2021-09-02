import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import UserPageContent from './UserPageContent';
import JobService from "../../service/JobService";
import JobCard from "../job/JobCard";
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import Switch from '@material-ui/core/Switch';
import {useForm} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import UserService from "../../service/UserService";
import FormLabel from '@material-ui/core/FormLabel';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { modalStyling } from '../../util/ModalStyling';

export default function UserDetails({user}) {

    const [savedJobs, setSavedJobs] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [updatedUser, setUser] = useState(user);

    useEffect(() => {
        JobService.getSavedJobs(3).then(res => setSavedJobs(res.data));
    }, [])


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
      console.log(event.target.value)
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
    }

    const editHandler = () => {
        if (edit === true) {
            setEdit(false)
            return;
        }
        setEdit(true)
    }

    const useStyles = makeStyles({
        root: {
            position:"absolute",
            marginLeft:"52%",
            zIndex:"0"
        },
        media: {
            height: 140,
        }, 
    });
    const classes = useStyles();


    // console.log(updatedUser)

    return (
        <>
            <Card className="user-card">
                <img className="user-profile-picture" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} alt="user's personal avatar" />
                <br/>
                <Card.Body>
                    <Card.Text style={{ textAlign: 'center' }}>
                        <h5>{user.firstName} {user.lastName}</h5>
                        {user.country} {user.city} <br />
                        <div style={{width:"24%", maxWidth:"none", minWidth:"auto", marginLeft:"38%", marginTop:"2%", position:"relative"}}>
                            <div style={{margin:"0 .8rem", height:"8vh"}}>
                                <section style={{borderRadius:"14px", backgroundColor:"#e9e5df", height:"100%", display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
                                    {state.checkedB ? (<a onClick={openModal} style={{margin:"7px", cursor:"pointer"}}>
                                        <EditOutlinedIcon onClick={openModal} className={classes.root} />
                                        <h3 style={{padding:"0", margin:"0", fontSize:"20px", display:"inline-block"}}>Open to work</h3>
                                        <p style={{padding:"0", margin:"0" , width:"100%", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}>Junior Developer · Marketing Specialist · System Administrator </p>
                                        <p style={{color:"blue"}}>see all details</p>
                                    </a>):(<a onClick={openModal} style={{margin:"7px", cursor:"pointer"}}><EditOutlinedIcon onClick={openModal} className={classes.root} /><h3 style={{padding:"0", margin:"0", fontSize:"20px", display:"inline-block"}}>Not open to work!</h3></a>)}
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
                        {edit ? (<form className={editClasses.root} onSubmit={
                        handleSubmit((data) => {
                            UserService.updateJobPreferences(3, state.checkedB)
                            editHandler();
                            UserService.getUserById(3).then(res => setUser(res.data));
                        })
                    } noValidate>
                        <div style={{display:"flex", flexDirection:"column", position:"relative", height:"700px"}}>
                            <div style={{display:"flex", justifyContent:"space-between",  borderBottom:"1px solid lightgrey", paddingBottom:"10px"}}>
                                <h3>Edit job preferences</h3>
                                <div style={{textAlign: "right"}}>
                                <Button color="primary" onClick={closeModal}>X</Button>
                                </div>
                            </div>
                            <div >
                                <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start", alignItems:"center", marginTop:"20px"}}>
                                    <div style={{width:"20%"}}>
                                    <a><img className="profile-picture-modal" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} /></a>
                                    </div>
                                    <div>
                                    <h3 style={{marginTop:"10%"}}>
                                        <strong style={{fontSize:"24px", color:"grey"}}>{user.firstName} {user.lastName}</strong>
                                        {state.checkedB ? (<p>is open to work</p>) : (<p>is not open to work</p>)}
                                        
                                    </h3>
                                    </div>
                                    <div style={{marginLeft:"50%"}}>
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    </div>
                                </div>
                                <ul style={{listStyle:"none", marginTop:"30px"}}>
                                    <li style={{paddingBottom:"5px", marginBottom:"5px"}}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    size="small"
                                                    autoComplete="title"
                                                    {...register("title", {required: true})}
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="title"
                                                    label="Title"
                                                    autoFocus
                                                />
                                                {errors.title && <span style={{color:"red"}}>This field is required!</span>}
                                                </Grid>
                                        </Grid>
                                        <h3 style={{ fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job titles</h3>
                                        <p>Junior Developer · Marketing Specialist · System Administrator</p>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"5px"}}>
                                    <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    size="small"
                                                    autoComplete="location"
                                                    {...register("location", {required: true})}
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="location"
                                                    label="Location"
                                                    autoFocus
                                                />
                                                {errors.location && <span style={{color:"red"}}>This field is required!</span>}
                                                </Grid>
                                        </Grid>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job locations</h3>
                                        <p>Bucharest, Bucharest, Romania</p>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"5px"}}>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="startDate" name="startDate" value={value} onChange={handleChangeRadio}>
                                                <FormControlLabel value="Immediately, I’m actively applying" control={<Radio color="primary" />} label="Immediately, I’m actively applying" />
                                                <FormControlLabel value="Flexible, I’m casually browsing" control={<Radio color="primary" />} label="Flexible, I’m casually browsing" />
                                            </RadioGroup>
                                        </FormControl>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a", marginTop:"20px"}}>Start date</h3>
                                        <p>Immediately, I’m actively applying</p>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"5px"}}>
                                    <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    size="small"
                                                    autoComplete="jobType"
                                                    {...register("jobType", {required: true})}
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="jobType"
                                                    label="Job type"
                                                    autoFocus
                                                />
                                                {errors.jobType && <span style={{color:"red"}}>This field is required!</span>}
                                                </Grid>
                                        </Grid>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job types</h3>
                                        <p>Full-time · Remote · Part-time</p>
                                    </li>
                                </ul>
                                <Button color="primary" type="submit">Save</Button>
                            </div>
                        </div>
                        </form>):(<div style={{display:"flex", flexDirection:"column", position:"relative"}}>
                            <div style={{display:"flex", justifyContent:"space-between",  borderBottom:"1px solid lightgrey", paddingBottom:"20px"}}>
                                <h3>Job preferences</h3>
                                <div style={{textAlign: "right"}}>
                                <Button color="primary" onClick={closeModal}>X</Button>
                                </div>
                            </div>
                            <div >
                                <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start", alignItems:"center", marginTop:"20px"}}>
                                    <div style={{width:"20%"}}>
                                    <a><img className="profile-picture-modal" src={user.picture ? user.picture : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"} /></a>
                                    </div>
                                    <div>
                                    <h3 style={{marginTop:"10%"}}>
                                        <strong style={{fontSize:"24px", color:"grey"}}>{user.firstName} {user.lastName}</strong>
                                        {state.checkedB ? (<p>is open to work</p>) : (<p>is not open to work</p>)}
                                    </h3>
                                    </div>
                                    <div>
                                    <EditOutlinedIcon className={classes.root} onClick={editHandler} />
                                    </div>
                                </div>
                                <ul style={{listStyle:"none", marginTop:"30px"}}>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{ fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job titles</h3>
                                        <p>Junior Developer · Marketing Specialist · System Administrator</p>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job locations</h3>
                                        <p>Bucharest, Bucharest, Romania</p>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Start date</h3>
                                        <p>Immediately, I’m actively applying</p>
                                    </li>
                                    <li style={{paddingBottom:"5px", marginBottom:"10px"}}>
                                        <h3 style={{fontSize:"14px", fontWeight:"800", color:"#3a3a3a"}}>Job types</h3>
                                        <p>Full-time · Remote · Part-time</p>
                                    </li>

                                </ul>
                            </div>
                        </div>)}
                    </Modal>
                    <UserPageContent />
                </Card.Body>
                <div style={{alignText: "center", margin: "auto"}}><h5>Jobs saved to favorites:</h5></div>

                <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
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