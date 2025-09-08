import { postFavourite } from '../utils/apiCalls'


const PropertyCard = ({ property, showFavouriteButton = false }) => {

    const handleFavourite = (e) => {
        e.preventDefault()
        postFavourite(property.property_id, 1).then((response) => {
            alert(response.data.msg)
        })
    }

    return(
        <div id='propertyCard'>
            <h3>{property.property_name}</h3>
            <p>{`Located in ${property.location}`}</p>
            <img id='propertyCardImage' src={property.image} alt={`Photo of ${property.property_name}`} />
            <p>{`£${property.price_per_night} per night`}</p>
            {showFavouriteButton && <button onClick={handleFavourite}>Favourite</button>}
        </div>
    )
}

export default PropertyCard