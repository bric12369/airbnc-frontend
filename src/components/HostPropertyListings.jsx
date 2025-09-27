import { useEffect, useState } from "react"
import { fetchProperties } from "../utils/apiCalls"
import { useParams } from "react-router"
import PropertyCard from "./PropertyCard"

const HostPropertyListings = () => {

    const {id} = useParams()

    const [properties, setProperties] = useState([])

    useEffect(() => {
        console.log(id)
        fetchProperties({'host_id': id}).then((response) => {
            setProperties(response.data.properties)
        })
    }, [id])

    return(
        <div className="flexContainer" id="hostListingsContainer">
            {properties.map((property) => {
                return <PropertyCard key={property.property_id} property={property} />
            })}
        </div>
    )
}

export default HostPropertyListings