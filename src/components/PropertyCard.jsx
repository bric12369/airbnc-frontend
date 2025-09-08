
const PropertyCard = ({ property, showFavouriteButton = false }) => {

    return(
        <div id='propertyCard'>
            <h3>{property.property_name}</h3>
            <p>{`Located in ${property.location}`}</p>
            <img id='propertyCardImage' src={property.image} alt={`Photo of ${property.property_name}`} />
            <p>{`£${property.price_per_night} per night`}</p>
            {showFavouriteButton && <button>Favourite</button>}
        </div>
    )
}

export default PropertyCard