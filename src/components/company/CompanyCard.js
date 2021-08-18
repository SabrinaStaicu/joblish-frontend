import React, {useState, useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {CardMedia} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Modal from 'react-modal';
import {Form} from "react-bootstrap";
import JobService from "../../service/JobService";



const useStyles = makeStyles({
    root: {
        width: "250px",
        marginLeft:"60px",
        marginTop:"30px"
    },
    media: {
        height: 140,
    },
});

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


const CompanyCard = (props) => {
    const classes = useStyles();

    const [modalIsOpen, setIsOpen] = useState(false);
    const [jobs, setJobs] = useState();
    // const [isLoading, setIsLoading] = useState();

    // useEffect(() =>  {
    //     JobService.getJobsByCompanyName(props.company.name).then(r => {
    //         console.log(r.data);
    //         setJobs(r.data);
    //         setIsLoading(false);
    //     })
    // })

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    // if (!isLoading) {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.company.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <strong>{props.company.category}</strong>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant="contained" color="primary" onClick={openModal}>
                        Jobs
                    </Button>
                </CardActions>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Button variant="contained" color="secondary" onClick={closeModal}>
                        X
                    </Button>
                    <Form>
                        {/*{*/}
                        {/*    jobs.*/}
                        {/*}*/}
                    </Form>
                </Modal>
            </Card>


        );
    // } else {
    //     return (
    //         <h3>Loading...</h3>
    //     )
    // }

};

export default CompanyCard;