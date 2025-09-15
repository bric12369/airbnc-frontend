import AnimatedButton from "./AnimatedButton"


const ProfileDetails = ({ profile }) => {

    return (
        <div id="profileFormContainer">
            <h3>Your details</h3>
            <form action="">
                <label>First name:
                    <input type="text" placeholder={profile.first_name} />
                </label>
                <label>Surname:
                    <input type="text" placeholder={profile.surname} />
                </label>
                <label>Email:
                    <input type="text" placeholder={profile.email} />
                </label>
                <label>Phone number:
                    <input type="number" placeholder={profile.phone_number} />
                </label>
                <AnimatedButton text='Update details' />
            </form>
        </div>
    )
}

export default ProfileDetails