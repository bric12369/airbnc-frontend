import { useContext, useState } from "react"
import UserContext from "../Contexts/UserContext"
import AnimatedButton from "./AnimatedButton"

const Login = ({ users }) => {

    const [userId, setUserId] = useState()

    const { userSignedIn, setUserSignedIn } = useContext(UserContext)

    const handleSelect = (e) => {
        setUserId(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setUserSignedIn(userId)
        console.log(userSignedIn)
    }

    return (
        <div>
            <select name="user" defaultValue={''} onChange={handleSelect}>
                <option value='' disabled>Choose a user</option>
                {users.map((user) => {
                    return <option key={user.user_id} value={user.user_id}>{`${user.first_name} ${user.surname}`}</option>
                })}
            </select>
            <AnimatedButton text='Submit' onClick={handleClick} disabled={!userId} />
        </div>
    )
}

export default Login