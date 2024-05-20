import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    // More options to do here
    // ---
    return axiosSecure;
};

export default useAxiosSecure;