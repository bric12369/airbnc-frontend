import { useRef } from "react";
import usePropertyDetails from "../hooks/usePropertyDetails"
import AnimatedButton from "./AnimatedButton";
import HostPropertyBookings from "./HostPropertyBookings";
import HostPropertyReviews from "./HostPropertyReviews";
import Loading from "./Loading";

const HostPropertyDetailsPage = () => {

    const imageContainerRef = useRef(null)

    const { property, isLoading } = usePropertyDetails()

    const handleScroll = (num) => {
        imageContainerRef.current?.scrollBy({ left: num })
    }

    if (isLoading || !property.images) {
        return <Loading msg="Loading" />
    } else {
        return (
            <div className="flexContainer">
                <h2>{property.property_name}</h2>
                <p>{property.location}</p>
                <div className="imageContainer" ref={imageContainerRef}>
                    {property.images.map((image, index) => {
                        return <img key={image} className="propertyImage" src={image} alt={`${property.property_name} image ${index + 1}`} />
                    })}
                </div>
                <div className="rowContainer">
                    <AnimatedButton text="<" onClick={() => handleScroll(-1)} id="scrollLeft" />
                    <AnimatedButton text=">" onClick={() => handleScroll(1)} id="scrollRight" />
                </div>
                <p>{property.description}</p>
                <HostPropertyBookings />
                <HostPropertyReviews />
            </div>
        )
    }

}

export default HostPropertyDetailsPage