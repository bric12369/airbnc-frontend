
const ReviewSnapshotCard = ({ review }) => {

    return(
        <div id='reviewSnapshotContainer'>
            <h3>{`Guest: ${review.guest}`}</h3>
            <p>{`Rating: ${review.rating}`}</p>
            <p>{review.comment}</p>
            <p>{review.created_at.split('T')[0]}</p>
        </div>
    )
}

export default ReviewSnapshotCard