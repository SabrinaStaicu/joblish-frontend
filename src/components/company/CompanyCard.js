import React, {useState, useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {CardMedia} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import JobCard from "../job/JobCard";



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


const CompanyCard = (props) => {
    const classes = useStyles();
    const [showJobs, setShowJobs] = useState(false);

    const toggleJobs = () => {
        setShowJobs(!showJobs);
    }

        return (
            <React.Fragment>
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
                        <Button size="small" variant="contained" color="primary" onClick={toggleJobs}>
                            Jobs
                        </Button>
                    </CardActions>
                </Card>
                {
                    showJobs ? (
                        props.company.jobs.map(
                            job => <JobCard job={job}/>
                        )
                    ) : ("")
                }
            </React.Fragment>

        );
};

export default CompanyCard;