import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://airbnc-icdq.onrender.com',
    // timeout: 2000
})

export default function fetchProperties(filter) {
    return apiClient.get(!filter ? '/api/properties' : `/api/properties?${filter}`).then((response) => {
        return response
    })
}