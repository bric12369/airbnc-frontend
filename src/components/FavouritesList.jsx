import { useContext, useEffect, useState } from "react"
import UserContext from "../Contexts/UserContext"
import PropertyCard from "./PropertyCard"
import Loading from "./Loading"
import useFavourites from "../hooks/useFavourites"

const FavouritesList = () => {

    const { userIdSignedIn } = useContext(UserContext)
    const { favourites, isLoading, setNewRequest } = useFavourites(userIdSignedIn)

    if (isLoading) {
        return <Loading msg="Loading" />
    } else {
        if (favourites.msg) {
            return <p>Add favourites to see them here.</p>
        } else {
            return (
                <div className="flexContainer">
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