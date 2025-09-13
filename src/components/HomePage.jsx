import { useContext } from "react"
import AnimatedButton from "./AnimatedButton"
import PropertyList from "./PropertyList"
import UserContext from "../Contexts/UserContext"
import { useNavigate } from "react-router"


const HomePage = ({ properties, setProperties }) => {

    const { userIdSignedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = (e) => {
        if (userIdSignedIn === null || userIdSignedIn === undefined) {
            alert('Please sign in to view your favourites')
        } else {
            navigate(`/user/${userIdSignedIn}/favourites`, { replace: true })
        }
    }

    return (
        <div id='homePage'>
            <PropertyList properties={properties} setProperties={setProperties} />
            <div id="fixedFooter">
                <AnimatedButton text="View favourites" onClick={handleClick} />
            </div>
        </div>
    )
}

export default HomePage