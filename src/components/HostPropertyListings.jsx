import { useEffect, useState } from "react"
import { fetchProperties } from "../utils/apiCalls"
import { useParams } from "react-router"
import PropertyCard from "./PropertyCard"
import Loading from "./Loading"

const HostPropertyListings = () => {

    const {id} = useParams()

    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        fetchProperties({'host_id': id}).then((response) => {
            setProperties(response.data.properties)
            setIsLoading(false)
        })
    }, [id])
    
    if (isLoading) {
        return <Loading />
    } else {
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
    }
}

export default HostPropertyListings