import React from 'react'
import { Card } from 'react-bootstrap';
import UserAvatar from './UserAvatar';
import UserPageNav from './UserPageNav';
import UserPageContent from './UserPageContent';

export default function UserDetails({ userData }) {
    return (
        <Card style={cardStyle}>
            <UserAvatar userAvatar={userData.avatar} />
            <br></br>
            <Card.Body>
                <Card.Text style={{ textAlign: 'center' }}>
                    <h5>{userData.first_name} {userData.last_name}</h5>
                    {userData.country}, {userData.county}<br/>
                    <strong>Intro:</strong><br />
                    {userData.intro}
                </Card.Text>
                <UserPageNav />
                <UserPageContent userData={userData}/>
            </Card.Body>
        </Card>
    )
}

const cardStyle = {
    width: '90%',
    height: '80%',
    padding: '2%',
    margin: '5%',
}
