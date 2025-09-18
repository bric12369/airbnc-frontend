import { useState } from "react"
import { Link } from "react-router"
import Login from "./Login"
import AnimatedIcon from "./AnimatedIcon"

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
                    <AnimatedIcon src="/home.png" alt="home-icon" />
                </Link>
                <h1>Air<span id="BnC">BnC</span></h1>
                <AnimatedIcon src='/avatar.png' alt='Profile icon' onClick={handleClick}/>
            </div>
            {profilePicClicked && <Login users={users} setProfilePicClicked={setProfilePicClicked} />}
        </>
    )
}

export default Header