import { useContext } from "react"
import UserContext from "../Contexts/UserContext"
import { useParams, Navigate } from "react-router"
import FavouritesList from "./FavouritesList"


const FavouritesPage = () => {

    const { id } = useParams()
    const { userIdSignedIn } = useContext(UserContext)

    if (userIdSignedIn === null || userIdSignedIn === undefined) {
        return <p>Please sign in to view your favourites</p>
    }

    if (id !== userIdSignedIn) {
        return <Navigate to={`/user/${userIdSignedIn}/favourites`} replace />
    }

    return(
        <div>
            <FavouritesList />
        </div>
    )
}

export default FavouritesPage