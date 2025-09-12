import { useContext } from 'react'
import { Link } from 'react-router'
import { postFavourite } from '../utils/apiCalls'
import UserContext from '../Contexts/UserContext'
import AnimatedButton from './AnimatedButton'


const PropertyCard = ({ property, showFavouriteButton = false }) => {

    const { userIdSignedIn } = useContext(UserContext)

    const handleFavourite = (e) => {
        e.preventDefault()
        if (userIdSignedIn === undefined) {
            alert('Please sign in to favourite a property')
        } else {
            postFavourite(property.property_id, userIdSignedIn).then((response) => {
                alert(response.data.msg)
            })
        }
    }

    return (
        <div id='propertyCard'>
            <Link to={`/properties/${property.property_id}`}>
                <h3>{property.property_name}</h3>
            </Link>
            <p>{`Located in ${property.location}`}</p>
            <Link to={`/properties/${property.property_id}`}>
                <img id='propertyCardImage' src={property.image} alt={`Photo of ${property.property_name}`} />
            </Link>
            <p>{`£${property.price_per_night} per night`}</p>
            {showFavouriteButton && <AnimatedButton text='Favourite' onClick={handleFavourite} />}
        </div>
    )
}

export default PropertyCard