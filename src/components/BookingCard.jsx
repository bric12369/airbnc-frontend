
const BookingCard = ({ booking }) => {

    return(
        <div className="propertyCard">
            <h3>{booking.property_name}</h3>
            <img className="propertyCardImage" src={booking.image} alt={`Image of ${booking.property_name}`} />
            <p>{`Check in: ${booking.check_in_date}`}</p>
            <p>{`Check out: ${booking.check_out_date}`}</p>
        </div>
    )
}

export default BookingCard