
const HostPropertyList = ({ profile, properties }) => {

    const fullName = `${profile.first_name} ${profile.surname}`

    return(
        <div>
            <h3>Your Rentals:</h3>
            {properties.map((property) => {
                return property.host === fullName ? <p key={property.property_id}>{property.property_name}</p> : null
            })}
        </div>
    )
}

export default HostPropertyList