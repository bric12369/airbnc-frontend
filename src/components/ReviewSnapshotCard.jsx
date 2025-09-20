import { toast } from "react-toastify"
import { deleteReview } from "../utils/apiCalls"
import { formatDateToDDMMYYYY } from "../utils/formatDates"
import AnimatedIcon from "./AnimatedIcon"

const ReviewSnapshotCard = ({ review, profile, setReload }) => {

    const profileFullName = `${profile.first_name} ${profile.surname}`

    const authorMatch = profileFullName === review.guest

    const handleDelete = (e) => {
        e.preventDefault()
        deleteReview(review.review_id).then((response) => {
            if (response.status === 204) {
                setReload((prev) => {
                    return prev === 0 ? 1 : 0
                })
                toast.success('Review deleted successfully')
            }
        })
    }

    return (
        <div className='reviewContainer'>
            <div className="flexContainer">
                <img src={review.guest_avatar} alt={`Photo of ${review.guest}`} id="reviewerImg" />
                <h3>{review.guest}</h3>
            </div>
            <p>{`Rating: ${review.rating}`}</p>
            <p>{review.comment}</p>
            <p>{formatDateToDDMMYYYY(review.created_at.split('T')[0])}</p>
            {authorMatch && <AnimatedIcon src='/delete.png' alt='Delete review' onClick={handleDelete}/>}
        </div>
    )
}

export default ReviewSnapshotCard