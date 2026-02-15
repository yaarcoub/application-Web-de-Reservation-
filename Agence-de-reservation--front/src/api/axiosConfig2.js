import axios from 'axios';


// Configuration Axios centralisée
const axiosInstance = axios.create({
  baseURL:  import.meta.env.VITE_NODE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance;
