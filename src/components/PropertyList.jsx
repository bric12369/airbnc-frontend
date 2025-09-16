import useProperties from '../hooks/useProperties'
import PropertyCard from './PropertyCard'
import ToolBar from './ToolBar'

const PropertyList = ({ properties, setProperties }) => {

    const { isLoading, setSearchParams } = useProperties(setProperties)

    return (
        <div id='propertyList'>
            <ToolBar setSearchParams={setSearchParams}/>
            {isLoading && <p>Waking up the server...</p>}
            {properties.map((property) => {
                return <PropertyCard property={property} key={property.property_id} showFavouriteButton={true} />
            })}
        </div>
    )
}

export default PropertyList