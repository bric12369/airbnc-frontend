import NewBookingCard from "./NewBookingCard"
import usePropertyDetails from "../hooks/usePropertyDetails"
import ReviewSnapshotCard from "./ReviewSnapshotCard"
import useReviews from "../hooks/useReviews"
import PropertyAddReviewSection from "./PropertyAddReviewSection"
import { useState } from "react"


const PropertyDetailsPage = () => {

    const { property, isLoading } = usePropertyDetails()
    const { reviews } = useReviews()
    const [showReviewSection, setShowReviewSection] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShowReviewSection(true)
    }
    
    if (isLoading || !property.images || !reviews.reviews) {
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
                <h3 className="subheading">Reviews:</h3>
                <p>{`Average rating: ${reviews.average_rating.toFixed(2)}`}</p>
                {reviews.reviews.map((review) => {
                    return <ReviewSnapshotCard key={review.review_id} review={review} />
                })}
                {showReviewSection === true ? <PropertyAddReviewSection setShowReviewSection={setShowReviewSection} /> : <button onClick={handleClick}>Add review</button>}
            </div>
        )
    }
}

export default PropertyDetailsPage