import useProperties from '../hooks/useProperties'
import PropertyCard from './PropertyCard'
import ToolBar from './ToolBar'

const PropertyList = ({ properties, propertiesLoading, setSearchParams }) => {

    return (
        <div className='flexColumnContainer'>
            <ToolBar setSearchParams={setSearchParams}/>
            {propertiesLoading && <p>Waking up the server...</p>}
            {properties.map((property) => {
                return <PropertyCard property={property} key={property.property_id} showFavouriteButton={true} />
            })}
        </div>
    )
}

export default PropertyList