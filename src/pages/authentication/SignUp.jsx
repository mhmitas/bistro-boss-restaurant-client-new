import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile, setUser } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    async function onSubmit(formData, e) {
        console.log(formData);
        try {
            const result = await createUser(formData.email, formData.password)
            // update user profile
            await updateUserProfile(formData.userName, formData.photoUrl)
            // Optimistic UI Update
            setUser({ ...result?.user, photoURL: formData.photoUrl, displayName: formData.userName })
            console.log(result);
            navigate('/')
            reset()
        }
        catch (err) {
            console.error(err);
            toast.error(err?.message.slice(10))
        }
    }

    return (
        <div className='lg:max-w-lg max-w-md mx-auto p-14 my-20 bg-base-100 shadow-lg rounded-md '>
            <h3 className='text-3xl font-semibold text-center mb-6'>Sign up</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full *:mb-3'>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        required
                        {...register("userName")}
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        required
                        {...register("email")}
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        {...register("password", { required: true, minLength: 6 })}
                        type='password'
                        className='input input-bordered'
                        required
                        name="password"
                    />
                    {errors.password?.type === 'minLength' && <span className='text-error p-1'>Password must be at lest 6 charecter</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        // required
                        {...register("photoUrl")}
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Sign up" />
                </div>
            </form>
            <p className="my-6">
                Already have an account? Please
                <Link to="/auth/login" className="link font-semibold link-primary ml-2">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default SignUp;