import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import useBooking from '../hooks/useBooking';


const NewBookingCard = () => {

    const { bookedDates, handleChange, handleSubmitBooking, buttonDisabled } = useBooking()

    return (
        <div>
            <Calendar minDate={new Date()} selectRange={true} onChange={handleChange} tileDisabled={({date}) =>
                bookedDates.some(bookedDate =>
                    bookedDate === date.toDateString()
                )} />
            <button disabled={buttonDisabled} onClick={handleSubmitBooking}>Submit booking</button>
        </div>
    )
}



export default NewBookingCard