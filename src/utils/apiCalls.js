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

export function fetchPropertyBookings(id) {
    return apiClient.get(`/api/properties/${id}/bookings`).then((response) => {
        return response
    })
}

export function fetchPropertyReviews(id) {
    return apiClient.get(`/api/properties/${id}/reviews`).then((response) => {
        return response
    })
}

export function fetchUsers() {
    return apiClient.get('/api/users').then((response) => {
        return response
    })
}

export function fetchUserById(id) {
    return apiClient.get(`/api/users/${id}`).then((response) => {
        return response
    })
}

export function fetchUserFavourites(id) {
    return apiClient.get(`/api/users/${id}/favourites`).then((response) => {
        return response
    }).catch((error) => {
        console.log(error)
        throw error
    })
}

export function fetchUserBookings(id) {
    return apiClient.get(`/api/users/${id}/bookings`).then((response) => {
        return response
    }).catch((error) => {
        console.log(error)
    })
}

export function postFavourite(propertyId, guestId) {
    return apiClient.post(`/api/properties/${propertyId}/favourite`, {
        'guest_id': guestId
    }).then((response) => {
        return response
    })
}

export function postBooking(propertyId, newBooking) {
    return apiClient.post(`/api/properties/${propertyId}/bookings`, newBooking).then((response) => {
        return response
    })
}

export function postReview(propertyId, reviewBody) {
    return apiClient.post(`/api/properties/${propertyId}/reviews`, reviewBody).then((response) => {
        return response
    })
}

export function deleteFavourite(propertyId, userId) {
    return apiClient.delete(`/api/properties/${propertyId}/users/${userId}/favourite`).then((response) => {
        return response
    })
}

export function updateUserDetails(userId, profileInputs) {
    return apiClient.patch(`/api/users/${userId}`, profileInputs).then((response) => {
        return response
    })
}