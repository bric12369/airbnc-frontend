import { useContext } from "react"
import UserContext from "../Contexts/UserContext"


const FavouritesPage = () => {

    const { userIdSignedIn } = useContext(UserContext)

    return(
        <div>
            {console.log(userIdSignedIn)}
            {userIdSignedIn === undefined ? <p>Please sign in</p> : <p>{`Welcome user number ${userIdSignedIn}`}</p>}
        </div>
    )
}

export default FavouritesPage