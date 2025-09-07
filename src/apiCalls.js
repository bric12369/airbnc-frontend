import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://airbnc-icdq.onrender.com',
    timeout: 2000
})

export default function fetchProperties() {
    return apiClient.get('/api/properties').then((response) => {
        return response
    })
}