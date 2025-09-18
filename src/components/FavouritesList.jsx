import { useContext, useEffect, useState } from "react"
import UserContext from "../Contexts/UserContext"
import { fetchUserFavourites } from "../utils/apiCalls"
import PropertyCard from "./PropertyCard"
import ToolBar from "./ToolBar"

const FavouritesList = () => {

    const [favourites, setFavourites] = useState([])
    const { userIdSignedIn } = useContext(UserContext)
    const [isLoading, setIsloading] = useState(true)
    const [newRequest, setNewRequest] = useState(0)

    useEffect(() => {
        setIsloading(true)
        fetchUserFavourites(userIdSignedIn).then((response) => {
            response.data.favourites !== undefined ? setFavourites(response.data.favourites) : setFavourites(response.data)
            setIsloading(false)
        })
    }, [newRequest])

    if (isLoading) {
        return <p>Loading...</p>
    } else {
        if (favourites.msg) {
            return <p>Add favourites to see them here.</p>
        } else {
            return (
                <div className="flexColumnContainer">
                    <h3>Your favourites</h3>
                    {favourites.map((favourite) => {
                        return <PropertyCard key={(favourite.favourite_id)} property={favourite} showDeleteFavouriteButton={true} setNewRequest={setNewRequest} />
                    })}
                </div>
            )
        }
    }

}

export default FavouritesList