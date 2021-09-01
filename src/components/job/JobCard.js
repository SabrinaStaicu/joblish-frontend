import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";
import {CardMedia} from "@material-ui/core";


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

const JobCard = (props) => {
    const history = useHistory();
    const classes = useStyles();

    const goToJob = () => {
        history.push({
            pathname: `/job/${props.job.id}`,
            state: {job: props.job}
        })
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.picture ? props.picture : "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png"}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.job.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>{props.job.category}</strong>
                    </Typography>
                    {
                        props.job.company_name ? (
                            <Typography variant="body2" component="h7">
                                {props.job.company_name}
                            </Typography>
                        ) : ("")
                    }
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="h7">
                        Type: {(props.job.jobType).replace("_", " ")}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
                {/* <Button size="small" color="primary">
                   Apply
                </Button> */}
                <Button size="small" variant="outlined" color="primary" onClick={goToJob}>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}

export default JobCard;