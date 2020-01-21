import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://personalsite-01.firebaseio.com'
})

export default axiosInstance;
