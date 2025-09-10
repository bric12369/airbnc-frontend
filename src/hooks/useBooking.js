import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { fetchPropertyBookings, postBooking } from '../utils/apiCalls';
import UserContext from '../Contexts/UserContext';
import { formatDate, getDateRange } from '../utils/formatDates';


export default function useBooking() {

        const [newBooking, setNewBooking] = useState({})
        const [currBookings, setCurrBookings] = useState([])
        const [buttonDisabled, setButtonDisabled] = useState(true)
    
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
                dates.push(getDateRange(booking.check_in_date, booking.check_out_date))
            }
            return dates.flat()
    
        }, [currBookings])
    
        const handleChange = (range) => {
            const [start, end] = range
            if (start && end) setButtonDisabled(false)
    
            setNewBooking({
                'guest_id': user === undefined ? 1 : user,
                'check_in_date': formatDate(start),
                'check_out_date': formatDate(end)
            })
        }
    
        const handleSubmitBooking = (e) => {
            e.preventDefault()
            postBooking(id, newBooking).then((response) => {
                alert(response.data.msg)
            })
            setButtonDisabled(true)
        }

    return { bookedDates, handleChange, handleSubmitBooking, buttonDisabled }
}