import { useContext, useEffect, useState } from "react"
import UserContext from "../Contexts/UserContext"
import { fetchUserById } from "../utils/apiCalls"
import ProfileDetails from "./ProfileDetails"
import BookingsList from "./BookingsList"

const ProfilePage = ({ bookings, setBookings, profile, setProfile, error }) => {

    const { userIdSignedIn } = useContext(UserContext)
    // const [isLoading, setIsLoading] = useState(false)

    if (error) {
        return <p>Please login to view your profile</p>
    } else {

        // if (isLoading) {
        //     return <p>Loading...</p>
        // } else {
            return (
                <div>
                    <h2>{`Hello, ${profile.first_name}!`}</h2>
                    <ProfileDetails profile={profile} setProfile={setProfile} />
                    <BookingsList bookings={bookings} setBookings={setBookings}/>
                </div>
            )
        }
    }
// }

export default ProfilePage