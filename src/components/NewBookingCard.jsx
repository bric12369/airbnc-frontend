import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import useBooking from '../hooks/useBooking';
import AnimatedButton from './AnimatedButton';


const NewBookingCard = () => {

    const { bookedDates, handleChange, handleSubmitBooking, buttonDisabled } = useBooking()

    return (
        <div className="flexColumnContainer">
            <Calendar minDate={new Date()} selectRange={true} onChange={handleChange} tileDisabled={({date}) =>
                bookedDates.some(bookedDate =>
                    bookedDate === date.toDateString()
                )} />
            <AnimatedButton text='Submit booking' onClick={handleSubmitBooking} disabled={buttonDisabled} />
        </div>
    )
}



export default NewBookingCard