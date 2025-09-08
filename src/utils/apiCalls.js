import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://airbnc-icdq.onrender.com',
    // timeout: 2000
})

export function fetchProperties(filter) {
    return apiClient.get(!filter ? '/api/properties' : `/api/properties?${filter}`).then((response) => {
        return response
    })
}

export function postFavourite(propertyId, guestId) {
    return apiClient.post(`/api/properties/${propertyId}/favourite`, {
        'guest_id': guestId
    }).then((response) => {
        return response
    })
}