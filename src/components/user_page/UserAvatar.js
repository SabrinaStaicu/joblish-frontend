import React from 'react'

export default function UserAvatar({ userAvatar }) {
    return (
        <img src={userAvatar} alt="user's personal avatar" style={avatarStyle}></img>
    )
}

const avatarStyle = {
    // textAlign: 'center',
    verticalAlign: 'middle',
    width: '10%',
    height: '10%',
    borderRadius: '50%'
}
