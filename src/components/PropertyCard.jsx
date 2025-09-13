import { useContext } from 'react'
import { Link } from 'react-router'
import { deleteFavourite, postFavourite } from '../utils/apiCalls'
import UserContext from '../Contexts/UserContext'
import AnimatedIcon from './AnimatedIcon'


const PropertyCard = ({ property, showFavouriteButton = false, showDeleteFavouriteButton = false, setNewRequest }) => {

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

    const handleDeleteFavourite = (e) => {
        e.preventDefault()
        deleteFavourite(property.property_id, userIdSignedIn).then((response) => {
            if (response.status === 204) {
                setNewRequest((curr) => curr === 0 ? 1 : 0)
                alert('Favourite removed')
            }
        })
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
            {showFavouriteButton && <AnimatedIcon src='/love.png' onClick={handleFavourite} alt='Favourite button' />}
            {showDeleteFavouriteButton && <AnimatedIcon src='/delete.png' onClick={handleDeleteFavourite} alt='Delete favourite button' />}
        </div>
    )
}

export default PropertyCard

