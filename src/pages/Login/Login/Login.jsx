import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the email and password data
    };

    return (
        <div className="flex items-center justify-center h-full p-5">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
                    Welcome back!
                </h2>
                <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full border-b border-gray-300 py-2 leading-tight focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full border-b border-gray-300 py-2 leading-tight focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            id="rememberMe"
                            type="checkbox"
                            className="rounded text-blue-600 border-gray-300 mr-2"
                        />
                        <label htmlFor="rememberMe" className="text-gray-800 text-sm">
                            Remember me
                        </label>
                        <div className="ml-auto">
                            <Link
                                to="/forgot-password"
                                className="text-yellow-500 text-sm font-semibold hover:text-yellow-600"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-yellow-500 text-black font-bold hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="mt-3 text-gray-800 text-center">
                    <p className='text-sm'>Don't have an account? <Link className='text-yellow-500 font-medium' to='/register'>Create an account</Link></p>
                </div>

                <div className="mt-2">

                    <div className='flex items-center justify-between gap-5 mb-2'>
                        <div className="w-full border-t border-gray-300 text-center"></div>
                        Or
                        <div className="w-full border-t border-gray-300 text-center"></div>
                    </div>

                    <button
                        className="w-full font-medium text-sm border border-gray-300 text-black py-2 px-4 rounded-full mb-2 hover:bg-gray-300"
                    >
                        <FaGoogle className="inline-block text-blue-500 mr-2" />
                        Sign in with Google
                    </button>
                    <button
                        className="w-full font-medium text-sm border border-gray-300 text-black py-2 px-4 rounded-full hover:bg-gray-300"
                    >
                        <FaGithub className="inline-block mr-2" />
                        Sign in with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;