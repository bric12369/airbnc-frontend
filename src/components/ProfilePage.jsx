import ProfileDetails from "./ProfileDetails"
import BookingsList from "./BookingsList"
import HostPropertyList from "./HostPropertyList"
import Loading from "./Loading"

const ProfilePage = ({ bookings, setBookings, profile, setProfile, error, isLoading, properties }) => {

    if (error) {
        return <p>Please login to view your profile</p>
    } else {

        if (isLoading) {
            return <Loading msg="Loading" />
        } else {
            return (
                <div className="flexColumnContainer">
                    <h2>{`Hello, ${profile.first_name}!`}</h2>
                    <ProfileDetails profile={profile} setProfile={setProfile} />
                    { profile.is_host === true && <HostPropertyList profile={profile} properties={properties}/> }
                    <BookingsList bookings={bookings} setBookings={setBookings}/>
                </div>
            )
        }
    }
}

export default ProfilePage