import { useEffect, useState } from "react"
import { fetchPropertyReviews } from "../utils/apiCalls"
import { useParams } from "react-router"

export default function useReviews() {

    const { id } = useParams()

    const [reviews, setReviews] = useState({})
    const [reload, setReload] = useState(0)
    const [reviewsLoading, setReviewsLoading] = useState(true)

    useEffect(() => {
        setReviewsLoading(true)
        fetchPropertyReviews(id).then((response) => {
            setReviews(response.data)
            setReviewsLoading(false)
        })
    }, [reload])

    return { reviews, setReload, reviewsLoading }
}