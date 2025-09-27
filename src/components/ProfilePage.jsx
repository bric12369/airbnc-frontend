import ProfileDetails from "./ProfileDetails"
import BookingsList from "./BookingsList"
import HostPropertyList from "./HostPropertyList"
import Loading from "./Loading"
import { Navigate, useParams } from "react-router"
import { useContext } from "react"
import UserContext from "../Contexts/UserContext"

const ProfilePage = ({ bookings, setBookings, profile, setProfile, error, isLoading, properties }) => {

    const { id } = useParams()
    const { userIdSignedIn } = useContext(UserContext)


    if (id !== userIdSignedIn) {
        return <Navigate to={`/user/${userIdSignedIn}/profile`} replace />
    }

    if (error) {
        return <p>Please login to view your profile</p>
    } else {

        if (isLoading) {
            return <Loading msg="Loading" />
        } else {
            return (
                <div className="flexContainer">
                    <h2>{`Hello, ${profile.first_name}!`}</h2>
                    <ProfileDetails profile={profile} setProfile={setProfile} />
                    {profile.is_host === true && <HostPropertyList profile={profile} properties={properties} />}
                    <BookingsList bookings={bookings} setBookings={setBookings} />
                </div>
            )
        }
    }
}

export default ProfilePage