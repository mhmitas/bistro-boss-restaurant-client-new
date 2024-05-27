import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOutUser } = useAuth()
    // More options to do here
    // request interceptor to add authorization header for every secure to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (err) {
        // Do something with request error
        return Promise.reject(err);
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(
        (response) => {
            return response
        },
        async (err) => {
            const status = err.response.status
            // for 401 or 403 : logout the user and navigate
            if (status === 401 || status == 403) {
                // navigate('/')
                // await logOutUser()
            }
            return Promise.reject(err)
        }
    )


    return axiosSecure;
};

export default useAxiosSecure;