import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import registration from '../../assets/registration.json'
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import useAuth from '../../Hooks/useAuth';
import Lottie from 'lottie-react';
const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const from = '/';

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, yourName, photoURL } = data;
        createUser(email, password)
            .then(() => {
                // Register successful, update user profile
                updateUserProfile(yourName, photoURL)
                    .then(() => {
                        navigate(from);
                        toast.success('Registered successfully');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
               <Helmet>
                <title> | Register</title>
            </Helmet>
            <div className="flex w-full max-w-sm  mx-auto mt-12 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                 <div className="w-full max-w-md rounded-md shadow sm:p-8 text-black">
            <div>
                <h2 className="text-2xl text-center ">Please Register</h2>
            </div>
         

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <Toaster />
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="input input-bordered"
                        {...register('yourName', { required: true })}
                    />
                    {errors.yourName && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <span className="label-text text-black">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        name="photo"
                        className="input input-bordered"
                        {...register('photoURL', { required: true })}
                    />
                    {errors.photoURL && <span className="text-red-500 ">This field is required</span>}

                    <label className="label">
                        <span className="label-text text-black">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Password</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            className="input input-bordered w-full"
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            })}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                               <FaEye />
                            ) : (
                               <IoMdEyeOff />
                            )}
                        </button>
                    </div>
                    {errors.password && errors.password.type === 'required' && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    {errors.password && errors.password.type === 'minLength' && (
                        <span className="text-red-500">Password must be at least 6 characters long</span>
                    )}
                    {errors.password && errors.password.type === 'pattern' && (
                        <span className="text-red-500">Password must contain at least one uppercase letter, one lowercase letter</span>
                    )}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-black">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#f9a06f]  text-white rounded">Register</button>
                </div>
            </form>
            <p className="text-center mb-4">
                Already have an account? Please <Link className="text-red-500 font-bold" to="/login">Login</Link>
            </p>
        </div>
                <div className="hidden bg-cover lg:block lg:w-1/2 pt-12">
                    	<Lottie animationData={registration} > </Lottie>	
    </div>

 
   
</div>
        </div>
    );
};

export default Register;