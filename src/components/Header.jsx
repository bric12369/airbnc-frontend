import { useState } from "react"
import Login from "./Login"

const Header = () => {

    const [profilePicClicked, setProfilePicClicked] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setProfilePicClicked(!profilePicClicked)
        console.log(profilePicClicked)
    }

    return <div id='header'>
        <img src="/home.png" alt="home-icon" className="header-icon" />
        <h1>AirBnC</h1>
        <img src="/avatar.png" alt="profile-icon" className="header-icon" onClick={handleClick} />
        { profilePicClicked && <Login /> }
    </div>
}

export default Header