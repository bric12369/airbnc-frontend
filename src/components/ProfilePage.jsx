import ProfileDetails from "./ProfileDetails"
import BookingsList from "./BookingsList"

const ProfilePage = ({ bookings, setBookings, profile, setProfile, error, isLoading }) => {

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
                    <BookingsList bookings={bookings} setBookings={setBookings}/>
                </div>
            )
        }
    }
}

export default ProfilePage