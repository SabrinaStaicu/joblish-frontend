import React from 'react'
import { Card } from 'react-bootstrap';
import UserPageContent from './UserPageContent';

export default function UserDetails({ user }) {
    return (
        <>
            <Card className="user-card">
                <img className="user-profile-picture" src={user.picture} alt="user's personal avatar" />
                <br/>
                <Card.Body>
                    <Card.Text style={{ textAlign: 'center' }}>
                        <h5>{user.firstName} {user.lastName}</h5>
                        {user.country} {user.city} <br />
                        {/*<strong>Intro:</strong><br />*/}
                        {/*{userData.intro}*/}
                        <h5 style={{margin: "10px"}}>{user.lookingForJob ? "OPEN TO WORK" : "NOT LOOKING FOR A JOB"}</h5>
                    </Card.Text>
                    <UserPageContent user={user} />
                </Card.Body>
            </Card>
        </>
    )
}