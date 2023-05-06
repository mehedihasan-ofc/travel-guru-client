import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaSignInAlt } from 'react-icons/fa';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data
    };

    return (
        <div className="flex items-center justify-center h-full p-5">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
                    Create an account
                </h2>
                <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            className="w-full text-sm border-b border-gray-300 py-2 leading-tight focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className="w-full text-sm border-b border-gray-300 py-2 leading-tight focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full text-sm border-b border-gray-300 py-2 leading-tight focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full text-sm border-b border-gray-300 py-2 leading-tight focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className="w-full text-sm border-b border-gray-300 py-2 leading-tight focus:outline-none focus:border-gray-500"
                        />
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
                    <p className='text-sm'>Already have an account? <Link className='text-yellow-500 font-medium' to='/login'>Login</Link></p>
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

export default Register;