import { useEffect, useState } from "react"
import { fetchPropertyBookings } from "../utils/apiCalls"
import { useParams } from "react-router"
import { formatDateToDDMMYYYY } from "../utils/formatDates"


const HostPropertyBookings = () => {

    const [bookingsLoading, setBookingsLoading] = useState(true)
    const [bookings, setBookings] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setBookingsLoading(true)
        fetchPropertyBookings(id).then((response) => {
            setBookings(response.data.bookings)
            setBookingsLoading(false)
        })
    }, [])

    if (bookingsLoading) {
        return <p>Loading...</p>
    } else {
        return (
            <>
                <h3>All Bookings:</h3>
                {
                    bookings.length > 0 ? (
                        <div className="bookingsContainer">
                            {bookings.map((booking) => {
                                return <p key={booking.booking_id}>{`${formatDateToDDMMYYYY(booking.check_in_date.split('T')[0])} - ${formatDateToDDMMYYYY(booking.check_out_date.split('T')[0])}`}</p>
                            })}
                        </div>
                    ) :
                        <p>No bookings yet</p>
                }
            </>
        )
    }

}

export default HostPropertyBookings