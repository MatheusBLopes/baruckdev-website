import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.WP_BARUCKDEV_API_URL
})