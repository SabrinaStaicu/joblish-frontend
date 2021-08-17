import React from 'react';
import './UserPageStyleCSS.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import UserDetails from './UserDetails';

export default function UserPage() {

    const [userData, setUserData] = React.useState({

        id: 1,
        first_name: 'TestFirstName1',
        last_name: 'TestLastName1',
        intro: 'TestIntro1',
        avatar: 'images/test_avatar.png',
        resume: {
            experience: [
                {
                    id: 1,
                    title: 'TestJobTitle 1',
                    description: 'TestJobDescription 1'
                },
                {
                    id: 2,
                    title: 'TestJobTitle 2',
                    description: 'TestJobDescription 2'
                }
            ],

            education: [
                {
                    id: 1,
                    school_name: 'TestSchoolName 1',
                    description: 'TestSchoolDescription 1'
                },
                {
                    id: 2,
                    school_name: 'TestSchoolTitle 2',
                    description: 'TestSchoolDescription 2'
                }
            ],

            skills: 'TestSkill1, TestSkill2'
        }
    });

    // useEffect will query directly to the users/id and get the exact user 

    return (
        <div className="user-page" style={userPageStyle}>
            <UserDetails userData={userData} />
        </div>
    )
}

const userPageStyle = {
    // height: '100%',
    // width: '100%',
    // backgroundImage: 'linear-gradient(to right bottom, #46c2ee, #35a2e2, #4681cf, #5e5db2, #6e358b)',
    display: 'flex',
    flexDirection: 'row',
}

