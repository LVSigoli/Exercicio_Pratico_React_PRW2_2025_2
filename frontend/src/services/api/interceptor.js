// External Libraries
import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://localhost:3000/', // idealmente estaria em um .env
})
