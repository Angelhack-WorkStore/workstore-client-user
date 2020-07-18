import axios from 'axios';

const baseURL = (() => {
    return "http://localhost:8081/api"
})

export const http = axios.create({
    baseURL: baseURL(),
})

