import { useContext, useEffect, useState } from "react"
import UserContext from "../Contexts/UserContext"
import { fetchUserById } from "../utils/apiCalls"
import AnimatedButton from "./AnimatedButton"

const ProfilePage = () => {

    const { userIdSignedIn } = useContext(UserContext)
    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchUserById(userIdSignedIn).then((response) => {
            setProfile(response.data.user)
            console.log(response.data.user)
            setIsLoading(false)
        })
    }, [userIdSignedIn])

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            <h2>{`Hello, ${profile.first_name}!`}</h2>
            <div id="profileFormContainer">
                <h3>Your details</h3>
                <form action="">
                    <label>First name:
                        <input type="text" placeholder={profile.first_name} />
                    </label>
                    <label>Surname:
                        <input type="text" placeholder={profile.surname}/>
                    </label>
                    <label>Email:
                        <input type="text" placeholder={profile.email}/>
                    </label>
                    <label>Phone number:
                        <input type="number" placeholder={profile.phone_number} />
                    </label>
                    <AnimatedButton text='Update details' />
                </form>
            </div>
        </div>
    )
}

export default ProfilePage