import { useContext, useEffect, useState } from "react"
import UserContext from "../Contexts/UserContext"
import { fetchUserById } from "../utils/apiCalls"
import ProfileDetails from "./ProfileDetails"

const ProfilePage = () => {

    const { userIdSignedIn } = useContext(UserContext)
    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
            fetchUserById(userIdSignedIn).then((response) => {
                setProfile(response.data.user)
                setIsLoading(false)
                setError('')
            }).catch((error) => {
            setError(error.response.data.msg)
        })
    }, [userIdSignedIn])

    if (error) {
        return <p>Please login to view your profile</p>
    } else {

        if (isLoading) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <h2>{`Hello, ${profile.first_name}!`}</h2>
                    <ProfileDetails profile={profile} />
                </div>
            )
        }
    }
}

export default ProfilePage