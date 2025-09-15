import { useEffect, useState } from 'react'
import { fetchProperties } from '../utils/apiCalls'

export default function useProperties( setProperties ) {
    const [filters, setFilters] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchProperties(filters).then((response) => {
            setProperties(response.data.properties)
            setIsLoading(false)
        })
    }, [filters])

    return { setFilters, isLoading }
}