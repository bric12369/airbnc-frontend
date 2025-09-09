import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';


const NewBookingCard = () => {

    return(
        <Calendar minDate={new Date()} selectRange={true}/>
    )
}

export default NewBookingCard