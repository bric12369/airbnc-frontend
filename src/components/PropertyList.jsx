import { useEffect } from 'react'
import fetchProperties from '../apiCalls'

const PropertyList = ({ properties, setProperties }) => {

    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response.data.properties)
        })
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