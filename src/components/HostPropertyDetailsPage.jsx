import { useLocation, useNavigate } from "react-router"
import usePropertyDetails from "../hooks/usePropertyDetails"
import { useEffect } from "react"

const HostPropertyDetailsPage = () => {

    const { property, isLoading } = usePropertyDetails()

    if (isLoading || !property) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Host Property Details Page</h3>
            <p>{property.property_name}</p>
        </div>
    )
}

export default HostPropertyDetailsPage