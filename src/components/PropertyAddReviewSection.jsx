import { useContext, useState } from "react"
import { postReview } from "../utils/apiCalls"
import { useParams } from "react-router"
import AnimatedButton from "./AnimatedButton"
import UserContext from "../Contexts/UserContext"

const PropertyAddReviewSection = ({ setShowReviewSection, setReload }) => {

    const [reviewBody, setReviewBody] = useState({})
    const { id } = useParams()
    const { userIdSignedIn } = useContext(UserContext)

    const handleCancel = (e) => {
        e.preventDefault()
        setShowReviewSection(false)
    }

    const handleInput = (e) => {
        setReviewBody((prevInputs) => {
            return {
                ...prevInputs,
                "guest_id": userIdSignedIn,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userIdSignedIn) {
            alert('Please login to add a review')
        } else {
            postReview(id, reviewBody).then((response) => {
                response.status === 201 ? alert('Review posted') : null
                setReload((prev) => {
                    return prev === 0 ? 1 : 0
                })
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} id='reviewForm'>
            <input type="text" name="comment" placeholder='Leave a review...' onChange={handleInput} />
            <label>Rating:
                <select name="rating" defaultValue="" onChange={handleInput}>
                    <option value="" disabled>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <AnimatedButton text='Submit review' />
            <AnimatedButton text='Cancel' onClick={handleCancel}/>
        </form>
    )
}

export default PropertyAddReviewSection