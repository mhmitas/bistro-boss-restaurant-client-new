import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
    const location = useLocation()
    console.log(location.state);
    const navigate = useNavigate()
    const { loginUser } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                // console.log(result.user);
                toast.success('Login success')
                navigate(location?.state ? location.state : '/');
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="min-h-screen hero">
                <div className="card shrink-0 w-full max-w-md min-w-96 shadow-xl bg-base-100 rounded-md">
                    <div className='card-body pt-3'>
                        <h3 className='text-center font-semibold text-3xl pt-6 '>Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register('email')} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password')} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="mt-6">
                            Don't have an account? Please
                            <Link to="/auth/signup" className="link link-primary ml-2">
                                Sign up
                            </Link>
                        </p>
                        <div className="divider mt-6">Or continue with</div>
                        <div className="form-control">
                            <div className="flex justify-center space-x-2 mt-4">
                                <button
                                    onClick={() => handlePopupSignIn(googleProvider)}
                                    className="btn btn-outline btn-icon btn-google">
                                    <FaGoogle className='text-xl' /> Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;