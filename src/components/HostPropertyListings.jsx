import { useEffect, useState } from "react"
import { fetchProperties } from "../utils/apiCalls"
import { useParams } from "react-router"
import PropertyCard from "./PropertyCard"
import Loading from "./Loading"

const HostPropertyListings = () => {

    const {id} = useParams()

    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    
    useEffect(() => {
        setIsLoading(true)
        fetchProperties({'host_id': id}).then((response) => {
            if (response.data.msg) {
                setError(response.data.msg)
                return
            }
            setError('')
            setProperties(response.data.properties)
        }).catch((error) => {
            setError(error.response.data.msg)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [id])
    
    if (isLoading) {
        return <Loading />
    } else if (properties.length > 0) {
        return(
            <>
            <h2>{properties[0].host}'s Listings:</h2>
                <div className="flexContainer" id="hostListingsContainer">
                    {properties.map((property) => {
                        return <PropertyCard key={property.property_id} property={property} />
                    })}
                </div>
            </>
        )
    } else {
        return <p>{error}...</p>
    }
}

export default HostPropertyListings