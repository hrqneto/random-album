import axios from 'axios'

const apiClient = axios.create({
    baseURL = 'https://api.unsplash.com',
    headers: {
        Accept: 'aplication/json',
        'Content-type': 'application/json'
    }
})

export default {
    getPhoto({
        page,
        perPage,
        orderBy
    }){
        return apiClient.get(`/collections/17098/photos?client_id=${API_KEY}&page=${page}&per_page=${perPage}&order_by=${orderBy}`)
    }
}