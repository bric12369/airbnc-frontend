import ProfileDetails from "./ProfileDetails"
import BookingsList from "./BookingsList"
import HostPropertyList from "./HostPropertyList"

const ProfilePage = ({ bookings, setBookings, profile, setProfile, error, isLoading, properties }) => {

    if (error) {
        return <p>Please login to view your profile</p>
    } else {

        if (isLoading) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <h2>{`Hello, ${profile.first_name}!`}</h2>
                    <ProfileDetails profile={profile} setProfile={setProfile} />
                    <HostPropertyList profile={profile} properties={properties}/>
                    <BookingsList bookings={bookings} setBookings={setBookings}/>
                </div>
            )
        }
    }
}

export default ProfilePage