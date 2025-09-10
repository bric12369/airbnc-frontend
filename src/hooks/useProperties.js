import { useEffect, useState } from 'react'
import { fetchProperties } from '../utils/apiCalls'

export default function useProperties( setProperties ) {
    const [filters, setFilters] = useState({})

    useEffect(() => {
        fetchProperties(filters).then((response) => {
            setProperties(response.data.properties)
        })
    }, [filters])

    return { setFilters }
}