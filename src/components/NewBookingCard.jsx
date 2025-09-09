import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { fetchPropertyBookings, postBooking } from '../utils/apiCalls';
import UserContext from '../Contexts/UserContext';


const NewBookingCard = () => {
    const [newBooking, setNewBooking] = useState({})
    const [currBookings, setCurrBookings] = useState([])

    const { id } = useParams()

    const user = useContext(UserContext)

    useEffect(() => {
        fetchPropertyBookings(id).then((response) => {
            setCurrBookings(response.data.bookings)
        })
    }, [id])

    let bookedDates = useMemo(() => {

        const dates = []

        for (const booking of currBookings) {
            const checkIn = new Date(booking.check_in_date)
            const checkOut = new Date(booking.check_out_date)
            dates.push(checkIn, checkOut)
        }

        return dates

    }, [currBookings])

    const handleChange = (range) => {
        const [start, end] = range
        setNewBooking({
            'guest_id': user === undefined ? 1 : user,
            'check_in_date': start.toISOString().split('T')[0],
            'check_out_date': end.toISOString().split('T')[0]
        })
    }

    const handleSubmitBooking = (e) => {
        e.preventDefault()
        postBooking(id, newBooking).then((response) => {
            alert(response.data.msg)
        })
    }

    return (
        <div>
            <Calendar minDate={new Date()} selectRange={true} onChange={handleChange} tileDisabled={({date}) =>
                bookedDates.some(bookedDate =>
                    bookedDate.toDateString() === date.toDateString()
                )} />
            <button onClick={handleSubmitBooking}>Submit booking</button>
        </div>
    )
}



export default NewBookingCard