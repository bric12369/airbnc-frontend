import { useEffect, useState } from 'react'
import { fetchProperties } from '../utils/apiCalls'
import { useSearchParams } from 'react-router'

export default function useProperties( setProperties ) {
    const [searchParams, setSearchParams] = useSearchParams({})
    const [propertiesLoading, setPropertiesLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setPropertiesLoading(true)
        fetchProperties(searchParams).then((response) => {
            if (response.data.msg) {
                setError(response.data.msg)
                return
            }
            setError('')
            setProperties(response.data.properties)
        }).catch((error) => {
            setError(error.response.data.msg)
        }).finally(() => {
            setPropertiesLoading(false)
        })
    }, [searchParams])

    return { propertiesLoading, setSearchParams, error }
}