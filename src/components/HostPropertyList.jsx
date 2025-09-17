
const HostPropertyList = ({ profile, properties }) => {

    const fullName = `${profile.first_name} ${profile.surname}`

    return(
        <div>
            <h3>Your Rentals:</h3>
            {properties.map((property) => {
                return property.host === fullName ? (
                    <div key={property.property_id}>
                        <h4>{property.property_name}</h4> 
                        <p>{property.location}</p>
                    </div>
                ): null
            })}
        </div>
    )
}

export default HostPropertyList