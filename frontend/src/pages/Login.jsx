import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const handleGoogleSignin = () => {};
    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="w-full max-w-sm px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md">
                <h2 className="mb-4 text-xl font-semibold ">Please Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-gray-700"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-gray-700"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow"
                        />
                    </div>
                    {message && (
                        <div className="mb-3 text-xs italic text-red-500">
                            {message}
                        </div>
                    )}
                    <div>
                        <button className="px-8 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none">
                            Login{' '}
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm font-medium align-baseline">
                    Haven't an account? Please{' '}
                    <Link
                        to="/register"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Register
                    </Link>
                </p>

                {/* google sign in */}
                <div className="mt-4">
                    <button
                        onClick={handleGoogleSignin}
                        className="flex flex-wrap items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white rounded bg-secondary hover:bg-blue-700 focus:outline-none"
                    >
                        <FaGoogle className="inline-block size-6" />
                        <span className="inline-block ml-2">
                            Sign in with Google
                        </span>
                    </button>
                </div>
                <p className="mt-5 text-xs text-center text-gray-500">
                    ©2025 Book Store. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;
