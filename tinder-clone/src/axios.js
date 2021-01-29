import axios from 'axios'

// dont forget to remove / in the link to avoid crashs
const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})


export default instance