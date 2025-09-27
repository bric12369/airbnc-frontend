import NewBookingCard from "./NewBookingCard"
import usePropertyDetails from "../hooks/usePropertyDetails"
import ReviewSnapshotCard from "./ReviewSnapshotCard"
import useReviews from "../hooks/useReviews"
import PropertyAddReviewSection from "./PropertyAddReviewSection"
import { useContext, useRef, useState } from "react"
import AnimatedButton from "./AnimatedButton"
import UserContext from "../Contexts/UserContext"
import Loading from "./Loading"
import { toast } from "react-toastify"
import { Link } from "react-router"


const PropertyDetailsPage = ({ profile }) => {

    const { property, isLoading } = usePropertyDetails()
    const { reviews, setReload } = useReviews()
    const [showReviewSection, setShowReviewSection] = useState(false)
    const { userIdSignedIn } = useContext(UserContext)
    const imageContainerRef = useRef(null)

    const handleClick = (e) => {
        e.preventDefault()
        if (userIdSignedIn === undefined || userIdSignedIn === null) {
            toast.warning('Please login to add a review')
        } else {
            setShowReviewSection(true)
        }
    }

    const handleScroll = (num) => {
        imageContainerRef.current?.scrollBy({ left: num })
    }

    const stillLoading = isLoading || !property.images

    if (stillLoading) {
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
                    <Link to={`/properties/host/${property.host_id}`}>
                        <img src={property.host_avatar} alt={`Photo of host: ${property.host}`} id='hostImage' />
                    </Link>
                    <Link to={`/properties/host/${property.host_id}`} id="hostImageFigcaptionLink">
                        <figcaption id="hostImageFigcaption">Like this property? Click here to check out what else host {property.host} has to offer.</figcaption>
                    </Link>
                <NewBookingCard />
                {Array.isArray(reviews.reviews) && reviews.reviews.length > 0 ? (
                    <>
                        <h3>Reviews:</h3>
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