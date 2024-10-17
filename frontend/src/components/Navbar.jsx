import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from '../assets/avatar.png'

const Navbar = () => {
    const currentUser = true;
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* left side */}
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to="/">
                    <FaBars className='size-6' />
                </Link>
                <div className='relative sm:w-72 w-40 space-x-2'>
                    <IoSearch className='absolute size-6 inline-block left-3 inset-y-1'/>
                    <input 
                        type="text" 
                        placeholder='Search here'
                        className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'
                    />
                </div>
            </div>

            {/* right side */}
            <div className='relative flex items-center md:space-x-3 space-x-2'>
                {
                    currentUser ? <button>
                        <img src={avatarImg} alt="" />
                    </button> : <Link to="/login"><FaUser /></Link>
                }
                <button className='hidden sm:block '>
                    <LuHeart className='size-6'/>
                </button>
                <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
                    <FaShoppingCart className=''/>
                    <span className='text-sm font-semibold sm:ml-1'>0</span>
                </Link>
            </div>
        </nav>

    </header>
  )
}

export default Navbar
