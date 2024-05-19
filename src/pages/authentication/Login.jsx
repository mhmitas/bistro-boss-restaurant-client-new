import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';

const Login = () => {
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
                console.log(result.user);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="min-h-screen hero">
                <div className="lg:grid grid-cols-2 *:mx-auto">
                    <div className="*:text-center lg:text-left hidden lg:flex flex-col items-center justify-center w-2/3 ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-md min-w-96 shadow-xl bg-base-100 rounded-md">
                        <h3 className='text-center font-semibold text-2xl pt-6 lg:hidden'>Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-3">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;