import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { popUpSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()

    async function handlePopupSignIn(provider) {
        try {
            const result = await popUpSignIn(provider)
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                uid: result.user?.uid,
            }
            const { data } = await axiosPublic.post('/users', userInfo)
            console.log(data);
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='w-full'>
            <button
                onClick={() => handlePopupSignIn(googleProvider)}
                className="btn w-full btn-outline btn-icon btn-google">
                <FaGoogle className='text-xl' /> Google
            </button>
        </div>
    );
};

export default SocialLogin;