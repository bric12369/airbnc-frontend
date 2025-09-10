import NewBookingCard from "./NewBookingCard"
import usePropertyDetails from "../hooks/usePropertyDetails"


const PropertyDetailsPage = () => {

    const { property, isLoading } = usePropertyDetails()
    
    if (isLoading || !property.images) {
        return <h3>Loading...</h3>
    } else {
        return(
            <div>
                <h2>{property.property_name}</h2>
                <p>{property.location}</p>
                <div className="imageContainer">
                {property.images.map((image, index) => {
                    return <img key={image} className="propertyImage" src={image} alt={`${property.property_name} image ${index + 1}`} />
                })}
                </div>
                <p>{property.description}</p>
                <img src={property.host_avatar} alt={`Photo of host: ${property.host}`} id='hostImage' />
                <figcaption>{`Host: ${property.host}`}</figcaption>
                <NewBookingCard />
            </div>
        )
    }
}

export default PropertyDetailsPage