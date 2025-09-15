import { useContext, useEffect, useState } from "react"
import UserContext from "../Contexts/UserContext"
import { fetchUserBookings } from "../utils/apiCalls"
import BookingCard from "./BookingCard"

const BookingsList = ({ bookings, setBookings }) => {

    const { userIdSignedIn } = useContext(UserContext)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchUserBookings(userIdSignedIn).then((response) => {
            if (response.data.msg) {
                setError(response.data.msg)
            } else {
                setBookings(response.data.bookings)
            }
        }).catch((error) => {
            setError(error)
        })
    }, [])

    if (error === 'No bookings found') {
        return <p>Make a booking to see it here</p>
    }

    return(
        <div>
            <h3>Your Bookings:</h3>
            {bookings.map((booking) => {
                return <BookingCard key={booking.booking_id} booking={booking} />
            })}
        </div>
    )
}

export default BookingsList