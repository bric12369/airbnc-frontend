import { useEffect, useState } from 'react'
import { fetchProperties } from '../utils/apiCalls'
import { useSearchParams } from 'react-router'

export default function useProperties( setProperties ) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [propertiesLoading, setPropertiesLoading] = useState(false)

    useEffect(() => {
        setPropertiesLoading(true)
        fetchProperties(searchParams).then((response) => {
            setProperties(response.data.properties)
            setPropertiesLoading(false)
        })
    }, [searchParams])

    return { propertiesLoading, setSearchParams }
}