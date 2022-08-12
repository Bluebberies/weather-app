import axios from 'axios'
import {toast} from 'react-toastify'

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  if (!expectedError) {
    console.log('Logging the error', error)
    toast.warn('Please check your internet connection')
  }
  return Promise.reject(error)
})

const getReq = axios.get

export default getReq
