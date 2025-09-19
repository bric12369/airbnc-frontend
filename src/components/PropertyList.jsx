import { useContext } from 'react'
import useFavourites from '../hooks/useFavourites'
import Loading from './Loading'
import PropertyCard from './PropertyCard'
import ToolBar from './ToolBar'
import UserContext from '../Contexts/UserContext'

const PropertyList = ({ properties, propertiesLoading, setSearchParams }) => {

    const { userIdSignedIn } = useContext(UserContext)

    const { favourites, isLoading, setNewRequest, error } = useFavourites(userIdSignedIn)

    return (
        <div className='flexColumnContainer'>
            <ToolBar setSearchParams={setSearchParams}/>
            {(propertiesLoading || isLoading) && <Loading msg="Loading..." />}
            {properties.map((property) => {
                return <PropertyCard property={property} key={property.property_id} showFavouriteButton={true} favourites={!error ? favourites : undefined} setNewRequest={setNewRequest} isLoading={isLoading} />
            })}
        </div>
    )
}

export default PropertyList