import usePropertyDetails from "../hooks/usePropertyDetails"
import HostPropertyBookings from "./HostPropertyBookings";
import HostPropertyReviews from "./HostPropertyReviews";
import Loading from "./Loading";

const HostPropertyDetailsPage = () => {

    const { property, isLoading } = usePropertyDetails()

    if (isLoading || !property.images) {
        return <Loading msg="Loading" />
    } else {
        return (
            <div className="flexContainer">
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
                <HostPropertyReviews />
            </div>
        )
    }

}

export default HostPropertyDetailsPage