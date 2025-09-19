import { useEffect, useState } from "react"
import { fetchUserFavourites } from "../utils/apiCalls"

export default function useFavourites(userIdSignedIn) {

    const [favourites, setFavourites] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [newRequest, setNewRequest] = useState(0)

    useEffect(() => {
        setIsloading(true)
        fetchUserFavourites(userIdSignedIn).then((response) => {
            response.data.favourites !== undefined ? setFavourites(response.data.favourites) : setFavourites(response.data)
            setIsloading(false)
        })
    }, [newRequest])

    return { favourites, isLoading, setNewRequest }

}