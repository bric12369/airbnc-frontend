import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { fetchPropertyById } from "../utils/apiCalls"

export default function usePropertyDetails() {
    const { id } = useParams()
    const [property, setProperty] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchPropertyById(id).then((response) => {
            setProperty(response.data.property)
            setIsLoading(false)
        })
    }, [])

    return { property, isLoading }
}
