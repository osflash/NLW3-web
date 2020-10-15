import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.PUBLIC_URL
      : 'http://localhost:3000'
})

export default api
