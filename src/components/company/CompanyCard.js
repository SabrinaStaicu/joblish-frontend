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
        width: "250px",
        marginLeft:"60px",
        marginTop:"30px",
    },
    media: {
        height: 140,
    },
});


const CompanyCard = ({company}) => {
    const classes = useStyles();
	const [jobs, setJobs] = useState([]);
    const [showJobs, setShowJobs] = useState(false);

    const toggleJobs = () => {
        setShowJobs(!showJobs);
    }

	useEffect(() => {

	}, [])

        return (
            <div>
                <article className="postcard light blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={company.logo} alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a className="postcard__title blue" href="#">{company.name}</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>{company.category}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{company.description}</div>
				<ul className="postcard__tagbox">
					<li className="tag__item play blue" onClick={toggleJobs}>
						<div style={{cursor:"pointer"}} ><i className="fas fa-play mr-2"></i>See Jobs</div>
					</li>
				</ul>
			</div>
		</article>
                {/*<Collapse in={showJobs}>*/}
                {/*    <h4 style={{textAlign:"center"}}>Jobs from {props.company.name}</h4>*/}
                {/*    <div className="companiesJobsSection">*/}
                {/*    {*/}
                {/*        props.company.jobs.map(*/}
                {/*            job => <JobCard picture={props.picture} job={job}/>*/}
                {/*        )*/}
                {/*    }*/}
                {/*    </div>*/}
                {/*</Collapse>*/}
            </div>

        );
};

export default CompanyCard;