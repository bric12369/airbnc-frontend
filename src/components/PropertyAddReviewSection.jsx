import { useState } from "react"
import { postReview } from "../utils/apiCalls"
import { useParams } from "react-router"

const PropertyAddReviewSection = ({ setShowReviewSection }) => {

    const [reviewBody, setReviewBody] = useState({})
    const { id } = useParams()

    const handleCancel = (e) => {
        e.preventDefault()
        setShowReviewSection(false)
    }

    const handleInput = (e) => {
        setReviewBody((prevInputs) => {
            return {
                ...prevInputs,
                "guest_id": 1,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postReview(id, reviewBody).then((response) => {
            response.status === 201 ? alert('Review posted') : null
        })
    }

    return (
        <form onSubmit={handleSubmit} id='reviewForm'>
            <input type="text" name="comment" placeholder='Leave a review...' onChange={handleInput} />
            <label>Rating:
                <select name="rating" onChange={handleInput}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button>Submit review</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default PropertyAddReviewSection