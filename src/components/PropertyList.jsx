import { useEffect } from 'react'
import axios from "axios"

const PropertyList = ({ properties, setProperties }) => {

    useEffect(() => {
        const fetchProperties = async () => {
                const response = await axios.get('https://airbnc-icdq.onrender.com/api/properties')
                setProperties(response.data.properties)
        }
        fetchProperties()
    }, [])

    return (
        <div id='propertyList'>
            <p>PropertyList</p>
            {properties.map((property) => {
                return <p key={property.property_id}>{property.property_name}</p>
            })}
        </div>
    )
}

export default PropertyList