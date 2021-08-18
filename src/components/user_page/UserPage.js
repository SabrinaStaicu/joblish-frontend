import React from 'react';
// import './UserPageStyleCSS.css';
import UserDetails from './UserDetails';
import NavBar from "../main/NavBar";

export default function UserPage() {

    const [userData, setUserData] = React.useState({

        id: 1,
        first_name: 'TestFirstName1',
        last_name: 'TestLastName1',
        intro: 'TestIntro1',
        phone_number: '40 551 734 212',
        email: 'test_email@testdomain.com',
        country: 'Testuania',
        county: 'Testland',
        avatar: 'images/test_avatar.png',
        resume: {
            experience: [
                {
                    id: 1,
                    name: 'TestJobTitle 1',
                    description: 'TestJobDescription 1'
                },
                {
                    id: 2,
                    name: 'TestJobTitle 2',
                    description: 'TestJobDescription 2'
                }
            ],

            education: [
                {
                    id: 1,
                    name: 'TestSchoolName 1',
                    description: 'TestSchoolDescription 1'
                },
                {
                    id: 2,
                    name: 'TestSchoolTitle 2',
                    description: 'TestSchoolDescription 2'
                }
            ],

            skills: 'TestSkill1, TestSkill2'
        }
    });

    // useEffect will query directly to the users/id and get the exact user 

    return (
        <div className="user-page" style={userPageStyle}>
            <NavBar />
            <UserDetails userData={userData} />
        </div>
    )
}

const userPageStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: 'linear-gradient(to right bottom, #46c2ee, #35a2e2, #4681cf, #5e5db2, #6e358b)',
    display: 'flex',
    flexDirection: 'row',
}

