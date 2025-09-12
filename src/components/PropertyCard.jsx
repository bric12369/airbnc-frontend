import { useContext } from 'react'
import { postFavourite } from '../utils/apiCalls'
import UserContext from '../Contexts/UserContext'
import AnimatedButton from './AnimatedButton'


const PropertyCard = ({ property, showFavouriteButton = false }) => {

    const user = useContext(UserContext)

    const handleFavourite = (e) => {
        e.preventDefault()
        const userId = user === undefined ? 1 : user
        postFavourite(property.property_id, userId).then((response) => {
            alert(response.data.msg)
        })
    }

    return(
        <div id='propertyCard'>
            <h3>{property.property_name}</h3>
            <p>{`Located in ${property.location}`}</p>
            <img id='propertyCardImage' src={property.image} alt={`Photo of ${property.property_name}`} />
            <p>{`£${property.price_per_night} per night`}</p>
            {showFavouriteButton && <AnimatedButton text='Favourite' onClick={handleFavourite} /> }
        </div>
    )
}

export default PropertyCard