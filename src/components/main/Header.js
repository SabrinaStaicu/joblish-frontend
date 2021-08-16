import React from 'react'
import NavBar from './NavBar'
import malePhoto from './malePhoto.svg'


const Header = () => {
    return (
        <header>
            <NavBar />
            <h2 className="headerText">Searching for a job?</h2>
            <div className="headerSearchBar">SearchBar</div>
            <img className="malePhoto" src={malePhoto} />
        </header>
    )
}

export default Header
