import { useEffect, useState } from 'react'
import { fetchProperties } from '../utils/apiCalls'
import { useSearchParams } from 'react-router'

export default function useProperties( setProperties ) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchProperties(searchParams).then((response) => {
            setProperties(response.data.properties)
            setIsLoading(false)
        })
    }, [searchParams])

    return { isLoading, setSearchParams }
}