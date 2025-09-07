import { useEffect, useState } from 'react'
import fetchProperties from '../apiCalls'
import PropertyCard from './PropertyCard'
import ToolBar from './ToolBar'

const PropertyList = ({ properties, setProperties }) => {

    const [filters, setFilters] = useState({})

    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response.data.properties)
        })
    }, [])

    return (
        <div id='propertyList'>
            <ToolBar filters={filters} setFilters={setFilters}/>
            {properties.map((property) => {
                return <PropertyCard property={property} key={property.property_id} />
            })}
        </div>
    )
}

export default PropertyList