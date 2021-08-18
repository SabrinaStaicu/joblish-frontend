import React from 'react'

export default function UserAvatar({ userAvatar }) {
    return (
        <img src={userAvatar} alt="user's personal avatar" style={avatarStyle}/>
    )
}

const avatarStyle = {
    display: 'block',
    marginLeft: '42.5%',
    marginRight: 'auto',
    verticalAlign: 'middle',
    AlignItems: 'center',
    width: '15%',
    height: 'auto',
    borderRadius: '50%'
}
