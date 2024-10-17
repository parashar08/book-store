import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';
import avatarImg from '../assets/avatar.png';

const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Orders', href: '/orders' },
    { name: 'Cart Page', href: '/cart' },
    { name: 'Check Out', href: '/checkout' },
];

const Navbar = () => {
    const [isDrowdownOpen, setIsDrowdownOpen] = useState(false);

    const currentUser = true;
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <FaBars className="size-6" />
                    </Link>
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <IoSearch className="absolute size-6 inline-block left-3 inset-y-1" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
                        />
                    </div>
                </div>

                {/* right side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    {currentUser ? (
                        <button
                            onClick={() => setIsDrowdownOpen(!isDrowdownOpen)}
                        >
                            <img
                                src={avatarImg}
                                alt=""
                                className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}
                            />
                        </button>
                    ) : (
                        <Link to="/login">
                            <FaUser />
                        </Link>
                    )}
                    {isDrowdownOpen && (
                        <div className="absolute top-12 right-10 bg-white shadow-md py-2 px-4 rounded-md">
                            {navigation.map((item) => (
                                <Link
                                    onClick={() => setIsDrowdownOpen(false)}
                                    key={item.name}
                                    to={item.href}
                                    className="block py-1 hover:bg-gray-100"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}
                    <button className="hidden sm:block ">
                        <LuHeart className="size-6" />
                    </button>
                    <Link
                        to="/cart"
                        className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
                    >
                        <FaShoppingCart className="" />
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
