import NewBookingCard from "./NewBookingCard"
import usePropertyDetails from "../hooks/usePropertyDetails"
import ReviewSnapshotCard from "./ReviewSnapshotCard"
import useReviews from "../hooks/useReviews"
import PropertyAddReviewSection from "./PropertyAddReviewSection"
import { useContext, useState } from "react"
import AnimatedButton from "./AnimatedButton"
import UserContext from "../Contexts/UserContext"
import Loading from "./Loading"
import { toast } from "react-toastify"


const PropertyDetailsPage = ({ profile }) => {

    const { property, isLoading } = usePropertyDetails()
    const { reviews, setReload } = useReviews()
    const [showReviewSection, setShowReviewSection] = useState(false)
    const { userIdSignedIn } = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        if (userIdSignedIn === undefined || userIdSignedIn === null) {
            toast.warning('Please login to add a review')
        } else {
            setShowReviewSection(true)
        }
    }

    const stillLoading = isLoading || !property.images

    if (stillLoading) {
        return <Loading msg="Loading" />
    } else {
        return (
            <div className="flexContainer">
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
                {showReviewSection === true ? <PropertyAddReviewSection setShowReviewSection={setShowReviewSection} setReload={setReload} /> : <AnimatedButton text={'Add review'} onClick={handleClick} />}
            </div>
        )
    }
}

export default PropertyDetailsPage