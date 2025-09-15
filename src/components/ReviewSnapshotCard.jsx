import { formatDateToDDMMYYYY } from "../utils/formatDates"

const ReviewSnapshotCard = ({ review }) => {

    return (
        <div id='reviewSnapshotContainer'>
            <div className="flexContainer">
                <img src={review.guest_avatar} alt={`Photo of ${review.guest}`} id="reviewerImg" />
                <h3>{review.guest}</h3>
            </div>
            <p>{`Rating: ${review.rating}`}</p>
            <p>{review.comment}</p>
            <p>{formatDateToDDMMYYYY(review.created_at.split('T')[0])}</p>
        </div>
    )
}

export default ReviewSnapshotCard