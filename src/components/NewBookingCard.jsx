import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { postBooking } from '../utils/apiCalls';
import UserContext from '../Contexts/UserContext';


const NewBookingCard = () => {
    const [newBooking, setNewBooking] = useState({})

    const { id } = useParams()

    const user = useContext(UserContext)

    useEffect(() => {
    },[newBooking])

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
        console.log(newBooking)
        postBooking(id, newBooking).then((response) => {
            alert(response.data.msg)
        })
    }

    return(
        <div>
            <Calendar minDate={new Date()} selectRange={true} onChange={handleChange}/>
            <button onClick={handleSubmitBooking}>Submit booking</button>
        </div>
    )
}



export default NewBookingCard