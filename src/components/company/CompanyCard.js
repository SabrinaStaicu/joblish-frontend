import React, {useState, useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {CardMedia, Collapse} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import JobCard from "../job/JobCard";
import './company.scss';




const useStyles = makeStyles({
    root: {
        // height: "280px",
        width: "250px",
        marginLeft:"60px",
        marginTop:"30px",
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
            <div>
                <article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={props.company.picture} alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a className="postcard__title blue" href="#">{props.company.name}</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>{props.company.category}
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">{props.company.description}</div>
				<ul class="postcard__tagbox">
					<li class="tag__item play blue" onClick={toggleJobs}>
						<div style={{cursor:"pointer"}} ><i class="fas fa-play mr-2"></i>See Jobs</div>
					</li>
				</ul>
			</div>
		</article>
                <Collapse in={showJobs}>
                    <h4 style={{textAlign:"center"}}>Jobs from {props.company.name}</h4>
                    <div className="companiesJobsSection">
                    {
                        props.company.jobs.map(
                            job => <JobCard picture={props.picture} job={job}/>
                        )
                    }
                    </div>
                </Collapse>
            </div>

        );
};

export default CompanyCard;