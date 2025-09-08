import { useEffect, useState } from 'react'
import { fetchProperties } from '../utils/apiCalls'
import PropertyCard from './PropertyCard'
import ToolBar from './ToolBar'

const PropertyList = ({ properties, setProperties }) => {

    const [filters, setFilters] = useState({})

    useEffect(() => {
        const chosenFilters = []
        for (const filter in filters) {
            chosenFilters.push(`${filter}=${filters[filter]}`)
        }
        fetchProperties(chosenFilters.join('&')).then((response) => {
            setProperties(response.data.properties)
        })
    }, [filters])

    return (
        <div id='propertyList'>
            <ToolBar setFilters={setFilters}/>
            {properties.map((property) => {
                return <PropertyCard property={property} key={property.property_id} showFavouriteButton={true} />
            })}
        </div>
    )
}

export default PropertyList