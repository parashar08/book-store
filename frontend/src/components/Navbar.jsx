import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';
import avatarImg from '../assets/avatar.png';
import { useSelector } from 'react-redux';

const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Orders', href: '/orders' },
    { name: 'Cart Page', href: '/cart' },
    { name: 'Check Out', href: '/checkout' },
];

const Navbar = () => {
    const [isDrowdownOpen, setIsDrowdownOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);

    const currentUser = false;
    return (
        <header className="px-4 py-6 mx-auto max-w-screen-2xl">
            <nav className="flex items-center justify-between">
                {/* left side */}
                <div className="flex items-center gap-4 md:gap-16">
                    <Link to="/">
                        <FaBars className="size-6" />
                    </Link>
                    <div className="relative w-40 space-x-2 sm:w-72">
                        <IoSearch className="absolute inline-block size-6 left-3 inset-y-1" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
                        />
                    </div>
                </div>

                {/* right side */}
                <div className="relative flex items-center space-x-2 md:space-x-3">
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
                            <FaUser className="size-5" />
                        </Link>
                    )}
                    {isDrowdownOpen && (
                        <div className="absolute px-4 py-2 bg-white rounded-md shadow-md top-12 right-10">
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
                        className="flex items-center p-1 px-2 rounded-md bg-primary sm:px-6"
                    >
                        <FaShoppingCart className="" />
                        {cartItems.length > 0 ? (
                            <span className="text-sm font-semibold sm:ml-1">
                                {cartItems.length}
                            </span>
                        ) : (
                            <span className="text-sm font-semibold sm:ml-1">
                                0
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
