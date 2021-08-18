import React, {useEffect} from 'react';
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

    useEffect(() => {
        console.log(props.job)
    }, [])

    const goToJob = () => {
        history.push({
            pathname: `/job/${props.job.id}`,
            state: {job: props.job}
        })
    }

    const apply = () => {
        history.push(`/apply/${props.job.id}`)
    }

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
                        {props.job.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>{props.job.category}</strong>
                    </Typography>
                    <Typography variant="body2" component="h7">
                        {props.job.company_name}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="h7">
                        Type: {props.job.job_type}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/*<Button size="small" color="primary" onClick={apply}>*/}
                {/*    Apply*/}
                {/*</Button>*/}
                <Button size="small" variant="contained" color="primary" onClick={goToJob}>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}

export default JobCard;