import { useEffect, useState } from "react"
import { fetchPropertyReviews } from "../utils/apiCalls"
import { useParams } from "react-router"

export default function useReviews() {

    const { id } = useParams()

    const [reviews, setReviews] = useState({})

    useEffect(() => {
        fetchPropertyReviews(id).then((response) => {
            setReviews(response.data)
        })
    }, [])

    return { reviews }
}