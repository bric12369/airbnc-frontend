import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { deleteFavourite, postFavourite } from '../utils/apiCalls'
import UserContext from '../Contexts/UserContext'
import AnimatedIcon from './AnimatedIcon'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { toast } from 'react-toastify'


const PropertyCard = ({ property, showFavouriteButton = false, showDeleteFavouriteButton = false, setNewRequest, favourites, isLoading }) => {

    const { userIdSignedIn } = useContext(UserContext)
    
    const [favourited, setFavourited] = useState(false)
    
    useEffect(() => {
        if (userIdSignedIn) {
            if ((favourites && favourites.hasOwnProperty('msg') || isLoading)) return
            const existingFavourite = favourites?.some((fav) => {
                return fav.property_id === property.property_id
            })
            setFavourited(existingFavourite)
        } else {
            setFavourited(false)
        }
    }, [favourites, property.property_id, userIdSignedIn, isLoading])


    const handleFavourite = (e) => {
        e.preventDefault()
        if (userIdSignedIn === undefined || userIdSignedIn === null) {
            toast.warning('Please sign in to favourite a property')
        } else {
            console.log(userIdSignedIn)
            postFavourite(property.property_id, userIdSignedIn).then((response) => {
                setFavourited(true)
            })
        }
    }

    const handleDeleteFavourite = (e) => {
        e.preventDefault()
        deleteFavourite(property.property_id, userIdSignedIn).then((response) => {
            if (response.status === 204) {
                setNewRequest((curr) => curr === 0 ? 1 : 0)
            }
        })
    }

    return (
        <div className='Card3D'>
            <Link to={`/properties/${property.property_id}`}>
                <h3>{property.property_name}</h3>
            </Link>
            <p>{property.location}</p>
            <Link to={`/properties/${property.property_id}`}>
                <img className='propertyCardImage' src={property.image} alt={`Photo of ${property.property_name}`} />
            </Link>
            <p>{`£${property.price_per_night} per night`}</p>
            { showFavouriteButton && (favourited ? 
            <AiFillHeart id='heartFilled' onClick={handleDeleteFavourite}/> : 
            <AiOutlineHeart id='heartOutline' onClick={handleFavourite}/> )}
            {showDeleteFavouriteButton && <AnimatedIcon src='/delete.png' onClick={handleDeleteFavourite} alt='Delete favourite button' id='deleteBtn' />}
        </div>
    )
}

export default PropertyCard

