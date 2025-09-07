
const PropertyCard = ({ property }) => {

    return(
        <div id='propertyCard'>
            <h3>{property.property_name}</h3>
            <p>{`Located in ${property.location}`}</p>
            <img id='propertyCardImage' src={property.image} alt={`Photo of ${property.property_name}`} />
            <p>{`£${property.price_per_night} per night`}</p>
        </div>
    )
}

export default PropertyCard