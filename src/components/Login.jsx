import { useContext, useState } from "react"
import UserContext from "../Contexts/UserContext"
import AnimatedButton from "./AnimatedButton"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const Login = ({ users, setProfilePicClicked }) => {

    const [userId, setUserId] = useState()
    const navigate = useNavigate()

    const { userIdSignedIn, setUserIdSignedIn } = useContext(UserContext)

    const handleSelect = (e) => {
        setUserId(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setUserIdSignedIn(userId)
        setProfilePicClicked(false)
        toast.success('Login successful')
    }

    const handleLogout = (e) => {
        e.preventDefault()
        setUserIdSignedIn(null)
        setProfilePicClicked(false)
        navigate('/')
        toast.success('Log out successful')
    }

    const handleViewProfile = (e) => {
        e.preventDefault()
        setProfilePicClicked(false)
        navigate(`/user/${userIdSignedIn}/profile`)
    }

    return (
        <div>
            {userIdSignedIn ? <>
                <AnimatedButton text='Log out' onClick={handleLogout} />
                <AnimatedButton text='View profile' onClick={handleViewProfile}/>
            </> : <>
                <select name="user" defaultValue={''} onChange={handleSelect}>
                    <option value='' disabled>Choose a user</option>
                    {users.map((user) => {
                        return <option key={user.user_id} value={user.user_id}>{`${user.first_name} ${user.surname}`}</option>
                    })}
                </select>
                <AnimatedButton text='Submit' onClick={handleLogin} disabled={!userId} />

            </>}
        </div>
    )
}

export default Login