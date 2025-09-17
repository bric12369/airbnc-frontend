import usePropertyDetails from "../hooks/usePropertyDetails"
import useBooking from "../hooks/useBooking"
import HostPropertyBookings from "./HostPropertyBookings";

const HostPropertyDetailsPage = () => {

    const { property, isLoading } = usePropertyDetails()

    if (isLoading || !property.images) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h3>Host Property Details Page</h3>
                <h2>{property.property_name}</h2>
                <p>{property.location}</p>
                <div className="imageContainer">
                    {property.images.map((image, index) => {
                        return <img key={image} className="propertyImage" src={image} alt={`${property.property_name} image ${index + 1}`} />
                    })}
                </div>
                <p>{property.description}</p>
                <HostPropertyBookings />
            </div>
        )
    }

}

export default HostPropertyDetailsPage