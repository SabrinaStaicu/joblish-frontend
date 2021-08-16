import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <header>
            <NavBar />
            <h2 className="headerText">Searching for a job?</h2>
            <div className="headerSearchBar">SearchBar</div>
        </header>
    )
}

export default Header
