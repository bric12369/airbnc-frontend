import { useEffect } from 'react'
import fetchProperties from '../apiCalls'
import PropertyCard from './PropertyCard'

const PropertyList = ({ properties, setProperties }) => {

    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response.data.properties)
        })
    }, [])

    return (
        <div id='propertyList'>
            {properties.map((property) => {
                return <PropertyCard property={property} key={property.property_id} />
            })}
        </div>
    )
}

export default PropertyList