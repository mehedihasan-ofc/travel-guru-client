import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import WhiteLogo from '../../../assets/logo-white.png';
import BlackLogo from '../../../assets/logo.png';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className='bg-gray-200'>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    <div className='w-28'>
                        <Link to="/">
                            {
                                location?.pathname === "/register" || location?.pathname === "/login" ? <img src={BlackLogo} alt="" /> : <img src={WhiteLogo} alt="" />
                            }
                        </Link>
                    </div>

                    <div className="max-w-sm px-4">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search your Destination..."
                                className="w-full py-3 pl-12 pr-4 bg-transparent text-gray-500 border rounded-md outline-none"
                            />
                        </div>
                    </div>

                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li className='font-normal text-white'><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : ""} to="/">Home</NavLink></li>
                        <li className='font-normal text-white'><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : ""} to="/news">News</NavLink></li>
                        <li className='font-normal text-white'><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : ""} to="/destination">Destination</NavLink></li>
                        <li className='font-normal text-white'><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : ""} to="/blog">Blog</NavLink></li>
                        <li className='font-normal text-white'><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : ""} to="/contact">Contact</NavLink></li>
                    </ul>

                    <Link to='/login' className='btn-primary font-normal hidden lg:block'>Login</Link>

                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className='absolute z-10 top-0 left-0 w-full'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <button className='btn-primary lg:block'>Star Applying</button>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link
                                                    to='/'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/statistics'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Statistics
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/applied-jobs'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Applied Jobs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Header;