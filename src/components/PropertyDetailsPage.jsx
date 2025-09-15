import NewBookingCard from "./NewBookingCard"
import usePropertyDetails from "../hooks/usePropertyDetails"
import ReviewSnapshotCard from "./ReviewSnapshotCard"
import useReviews from "../hooks/useReviews"
import PropertyAddReviewSection from "./PropertyAddReviewSection"
import { useContext, useState } from "react"
import { motion } from "motion/react"
import AnimatedButton from "./AnimatedButton"
import UserContext from "../Contexts/UserContext"


const PropertyDetailsPage = ({ profile }) => {

    const { property, isLoading } = usePropertyDetails()
    const { reviews, setReload } = useReviews()
    const [showReviewSection, setShowReviewSection] = useState(false)
    const { userIdSignedIn } = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        if (userIdSignedIn === undefined) {
            alert('Please login to add a review')
        } else {
            setShowReviewSection(true)
        }
    }

    const stillLoading = isLoading || !property.images

    if (stillLoading) {
        return <h3>Loading...</h3>
    } else {
        return (
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
                {Array.isArray(reviews.reviews) && reviews.reviews.length > 0 ? (
                    <>
                        <h3 className="subheading">Reviews:</h3>
                        <p>{`Average rating: ${reviews.average_rating.toFixed(2)}`}</p>
                        {reviews.reviews.map((review) => {
                            return <ReviewSnapshotCard key={review.review_id} review={review} profile={profile} setReload={setReload} />
                        })}
                    </>
                ) : (
                    <p>No reviews yet</p>
                )}
                {showReviewSection === true ? <PropertyAddReviewSection setShowReviewSection={setShowReviewSection} /> : <AnimatedButton text={'Add review'} onClick={handleClick} />}
            </div>
        )
    }
}

export default PropertyDetailsPage