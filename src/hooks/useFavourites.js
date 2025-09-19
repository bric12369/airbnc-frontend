import { useEffect, useState } from "react"
import { fetchUserFavourites } from "../utils/apiCalls"

export default function useFavourites(userIdSignedIn) {

    const [favourites, setFavourites] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [newRequest, setNewRequest] = useState(0)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!userIdSignedIn) {
            setFavourites([])
            setError(null)
            setIsloading(false)
            return
        }
        setIsloading(true)
        fetchUserFavourites(userIdSignedIn).then((response) => {
            response.data.favourites !== undefined ? setFavourites(response.data.favourites) : setFavourites(response.data)
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setIsloading(false)
        })
    }, [newRequest, userIdSignedIn])

    return { favourites, isLoading, setNewRequest, error }

}