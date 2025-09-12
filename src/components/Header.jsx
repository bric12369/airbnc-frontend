import { useState } from "react"
import { Link } from "react-router"
import Login from "./Login"

const Header = ({ users }) => {

    const [profilePicClicked, setProfilePicClicked] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setProfilePicClicked(!profilePicClicked)
    }

    return (
        <>
            <div id='header'>
                <Link to='/'>
                    <img src="/home.png" alt="home-icon" className="header-icon" />
                </Link>
                <h1>AirBnC</h1>
                <img src="/avatar.png" alt="profile-icon" className="header-icon" onClick={handleClick} />
            </div>
            {profilePicClicked && <Login users={users} />}
        </>
    )
}

export default Header