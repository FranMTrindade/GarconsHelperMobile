import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.21:3030'
})

export { api };