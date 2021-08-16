import React from 'react'
import NavBar from './NavBar'
import malePhoto from './malePhoto.svg'


const Header = () => {
    return (
        <header>
            <NavBar />
            <h2 className="headerText">Searching for a job?<br></br>Find the <span style={{color:"rgb(30, 209, 170)", fontSize:"30px"}}>best job</span> <br></br> that fits you!</h2>
            <div className="headerSearchBar">
                <div></div>
                <div></div>
                <div>
                    <button className="searchButton">Search Job</button>
                </div>
            </div>
            <img className="malePhoto" src={malePhoto} />
        </header>
    )
}

export default Header
