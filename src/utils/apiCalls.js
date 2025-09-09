import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://airbnc-icdq.onrender.com'
})

export function fetchProperties(filters) {
    return apiClient.get('/api/properties', {
        params: filters
    }).then((response) => {
        return response
    })
}

export function fetchPropertyById(id) {
    try {
        return apiClient.get(`/api/properties/${id}`).then((response) => {
            return response
        })
        
    } catch (error) {
        console.log(error)
    }
}

export function postFavourite(propertyId, guestId) {
    return apiClient.post(`/api/properties/${propertyId}/favourite`, {
        'guest_id': guestId
    }).then((response) => {
        return response
    })
}