import usePropertyDetails from "../hooks/usePropertyDetails"
import useBooking from "../hooks/useBooking"
import { useEffect, useState } from "react"
import { fetchPropertyBookings } from "../utils/apiCalls"
import { useParams } from "react-router"
import { formatDateToDDMMYYYY } from "../utils/formatDates"

const HostPropertyDetailsPage = () => {

    const { property, isLoading } = usePropertyDetails()
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

    if (isLoading || !property.images || bookingsLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h3>Host Property Details Page</h3>
                <h2>{property.property_name}</h2>
                <p>{property.location}</p>
                <div className="imageContainer">
                    {property.images.map((image, index) => {
                        return <img key={image} className="propertyImage" src={image} alt={`${property.property_name} image ${index + 1}`} />
                    })}
                </div>
                <p>{property.description}</p>
                <h3>All Bookings:</h3>
                {bookings.length > 0 ? (
                    <div> 
                        {bookings.map((booking) => {
                        return <p key={booking.booking_id}>{`${formatDateToDDMMYYYY(booking.check_in_date.split('T')[0])} - ${formatDateToDDMMYYYY(booking.check_out_date.split('T')[0])}`}</p>
                    })}
                    </div>
                ) :
                    <p>No bookings yet</p>
                }
            </div>
        )
    }

}

export default HostPropertyDetailsPage