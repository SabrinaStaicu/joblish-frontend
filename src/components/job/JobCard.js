import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {/*<CardMedia*/}
                {/*    className={classes.media}*/}
                {/*    image="/static/images/cards/contemplative-reptile.jpg"*/}
                {/*    title="Contemplative Reptile"*/}
                {/*/>*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.job.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.job.category}
                    </Typography>
                    <Typography variant="body2" component="h7">
                        {props.job.company_name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}

export default JobCard;