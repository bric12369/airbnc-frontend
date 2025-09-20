import { toast } from "react-toastify"
import UserContext from "../Contexts/UserContext"
import { updateUserDetails } from "../utils/apiCalls"
import AnimatedButton from "./AnimatedButton"
import { useContext, useState } from "react"


const ProfileDetails = ({ profile, setProfile }) => {

    const [toggle, setToggle] = useState(0)
    const { userIdSignedIn } = useContext(UserContext)
    const [profileInputs, setProfileInputs] = useState({})
    
    
    const handleClick = () => {
        setToggle(toggle === 0 ? 1 : 0)
    }

    const handleChange = (e) => {
        setProfileInputs((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUserDetails(userIdSignedIn, profileInputs).then((response) => {
            setProfile(response.data.user)
            toast.success('Update successful')
            setToggle(toggle === 0 ? 1 : 0)
        })
    }

    return (
        <>
            <h3>Your details</h3>
            {toggle === 1 ?
                <>

                    <form className="profileContent">
                        <label>First name:
                            <input type="text" placeholder={profile.first_name} name="first_name" onChange={handleChange}/>
                        </label>
                        <label>Surname:
                            <input type="text" placeholder={profile.surname} name="surname" onChange={handleChange}/>
                        </label>
                        <label>Email:
                            <input type="text" placeholder={profile.email} name="email" onChange={handleChange}/>
                        </label>
                        <label>Phone number:
                            <input type="number" placeholder={profile.phone_number} name="phone_number" onChange={handleChange}/>
                        </label>
                        <AnimatedButton text="Submit" onClick={handleSubmit} disabled={!Object.values(profileInputs).some(value => value.trim() !== "")} />
                    </form>

                </>
                    : 
                    <div className="profileContent" id="profileViewBox">
                        <p>{`First name: ${profile.first_name}`}</p>
                        <p>{`Surname: ${profile.surname}`}</p>
                        <p>{`Email: ${profile.email}`}</p>
                        <p>{`Phone number: ${profile.phone_number}`}</p>
                    </div>
                }
                <AnimatedButton onClick={handleClick} text={toggle === 0 ? "Edit details" : "Cancel"} />
        </>
    )
}

export default ProfileDetails