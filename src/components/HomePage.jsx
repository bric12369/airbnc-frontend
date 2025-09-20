import { useContext } from "react"
import AnimatedButton from "./AnimatedButton"
import PropertyList from "./PropertyList"
import UserContext from "../Contexts/UserContext"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"


const HomePage = ({ properties, propertiesLoading, setSearchParams }) => {

    const { userIdSignedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = (e) => {
        if (userIdSignedIn === null || userIdSignedIn === undefined) {
            toast.warning('Please sign in to view your favourites')
        } else {
            navigate(`/user/${userIdSignedIn}/favourites`, { replace: true })
        }
    }

    return (
        <div id='homePage'>
            <PropertyList properties={properties} propertiesLoading={propertiesLoading} setSearchParams={setSearchParams} />
            <div id="fixedFooter">
                <AnimatedButton text="View favourites" onClick={handleClick} />
            </div>
        </div>
    )
}

export default HomePage