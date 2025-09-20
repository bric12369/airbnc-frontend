import { toast } from "react-toastify"
import { deleteBooking } from "../utils/apiCalls"
import { formatDateToDDMMYYYY } from "../utils/formatDates"
import AnimatedIcon from "./AnimatedIcon"

const BookingCard = ({ booking, setRefetch }) => {

    const handleDeleteBooking = (e) => {
        e.preventDefault()
        deleteBooking(booking.booking_id).then((response) => {
            if (response.status === 204) {
                setRefetch((prev) => prev === 0 ? 1 : 0)
                toast.success('Booking deleted successfully')
            }
        })
    }

    return(
        <div className="Card3D">
            <h3>{booking.property_name}</h3>
            <img className="propertyCardImage" src={booking.image} alt={`Image of ${booking.property_name}`} />
            <p>{`Check in: ${formatDateToDDMMYYYY(booking.check_in_date)}`}</p>
            <p>{`Check out: ${formatDateToDDMMYYYY(booking.check_out_date)}`}</p>
            <AnimatedIcon src='/delete.png' onClick={handleDeleteBooking} />
        </div>
    )
}

export default BookingCard