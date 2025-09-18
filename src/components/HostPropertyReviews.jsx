import useReviews from "../hooks/useReviews"
import { formatDateToDDMMYYYY } from "../utils/formatDates"
import Loading from "./Loading"

const HostPropertyReviews = () => {

    const { reviews, reviewsLoading } = useReviews()

    if (reviewsLoading) {
        return <Loading />
    } else if (reviews.msg) {
        return <p>Guest reviews will appear here</p>
    } else {
        return (
            <>
                <h3>Reviews:</h3>
                <p>{`Average rating: ${reviews.average_rating.toFixed(2)}`}</p>
                {reviews.reviews.map((review) => {
                    return (
                        <div key={review.review_id} className="reviewContainer">
                            <div className="flexContainer">
                                <img src={review.guest_avatar} alt={`Photo of ${review.guest}`} id="reviewerImg" />
                                <h3>{review.guest}</h3>
                            </div>
                            <p>{`Rating: ${review.rating}`}</p>
                            <p>{review.comment}</p>
                            <p>{formatDateToDDMMYYYY(review.created_at.split('T')[0])}</p>
                        </div>
                    )
                })
                }
            </>
        )
    }

}

export default HostPropertyReviews