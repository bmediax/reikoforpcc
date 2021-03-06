import React from 'react'
import axios from 'axios'

// base url
const instance = axios.create({
    baseURL: "https://calndr.link/api/events",
})

export default instance
