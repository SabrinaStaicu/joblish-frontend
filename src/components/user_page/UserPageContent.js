import React, {useEffect, useState} from 'react'
import JobService from "../../service/JobService";
import JobCard from "../job/JobCard";

export default function UserPageContent({user}) {


    return (
        <div className="square border border-primary" style={userPageContentStyle}>
            <div style={contentContainer}>
                
                <div style={containerItem}>
                    <div style={containerItemTitle}>Contact info:</div>
                    <div>

                    <strong>Phone number:</strong><br />
                    {user.phone}<br/>

                    <strong>Email:</strong><br />
                    {user.email}<br/>
                        
                    </div>
                </div>

                {/*<hr style={breakLine}/>*/}

                {/*<div style={containerItem}>*/}
                {/*    <div style={containerItemTitle}>Education:</div>*/}
                {/*    <div>*/}
                {/*        <CvContentList resumeData={userData.resume.education}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <hr style={breakLine}/>

                <div style={containerItem}>
                    <div style={containerItemTitle}>Experience:</div>
                    <div>
                        <p>{user.experience}</p>
                    </div>
                </div>

                <hr style={breakLine}/>

                {/*<div>*/}
                {/*    <div style={containerItemTitle}>Skills:</div>*/}
                {/*    <div>*/}
                {/*    {userData.resume.skills}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}

const userPageContentStyle = {
    display: 'flex',
    // padding: '5%',
    margin: '2.5%',
    // width: '90%',
    // height: '90%'
    borderRadius: '25px',
    width: '95%'
}

const contentContainer = {
    flexDirections: 'column',
    padding: '5%',
    width: '100%'
}

const containerItem = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}

const containerItemTitle = {
    width: '20%'
}

const breakLine = {
    width:'100%',
    textAlign:'center',
    marginLeft:0
}
